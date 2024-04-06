"use client";
import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "../styles/posts.module.css";
import getPostsQuery from "@/lib/quaries/Posts/getPostsQuery";

import { Heading, Select, Skeleton, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function Posts() {
  const fakePosts = [
    {
      id: 1123123,
      title: "11 His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    },
    {
      id: 1123124,
      title: "1taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    },
    {
      id: 1123125,
      title: "2 always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    },
    {
      id: 1123126,
      title: "3 lways taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    },
  ];

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getPost"],
    queryFn: getPostsQuery,
    retry: 100,
  });
  const filterPosts = useCallback(
    (tag = "All") => {
      if (tag === "All") return data.posts;
      return data.posts.filter((post) => post.tags.includes(tag));
    },
    [data]
  );
  const [posts, setPosts] = useState(fakePosts);
  useEffect(() => {
    if (data) {
      setPosts(filterPosts("All"));
    }
  }, [data, filterPosts]);

  const createTags = (list) => {
    const tags = new Set(); // Use Set for efficient unique tag storage

    list.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.add(tag); // Add unique tags to the Set
      });
    });

    return Array.from(tags); // Convert the Set back to an array if needed
  };

  if (isError) return <div> an unexpected error occured </div>;

  return (
    <div>
      <Select
        size={"lg"}
        id="mySelect"
        maxW={500}
        m={"30px auto"}
        onChange={(e) => {
          setPosts(filterPosts(e.target.value));
        }}
      >
        <option value={"All"}>All</option>
        {data
          ? createTags(data.posts).map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))
          : null}
      </Select>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <Skeleton isLoaded={!isLoading}>
            <Heading as="h2" size="lg" m={"20px"}>
              {post.title}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <p>{post.body}</p>
          </Skeleton>
        </div>
      ))}
    </div>
  );
}
