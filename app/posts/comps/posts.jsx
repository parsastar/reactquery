"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styles from "../styles/posts.module.css";
import getPostsQuery from "@/lib/quaries/Posts/getPostsQuery";
import sendPostQuery from "@/lib/quaries/Posts/sendPostQuert";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  // const queryclient = useQueryClient();
  // const newPost = {
  //   id: 1,
  //   title: "His mother had always taught him",
  //   body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  //   userId: 9,
  //   tags: ["history", "american", "crime"],
  //   reactions: 2,
  // };
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getPost"],
    queryFn: getPostsQuery,
  });
  // const {
  //   mutate: sendPost,
  //   isPending,
  //   isError: sendError,
  //   isSuccess,
  // } = useMutation({
  //   mutationKey: ["sendPost"],
  //   mutationFn: () => sendPostQuery(newPost),
  //   onSuccess: () => {
  //     queryclient.invalidateQueries({ queryKey: [getPosts] });
  //   },
  //   retry: 5,
  // });

  useEffect(() => {
    if (data && !isError && !isLoading) {
      setPosts(filterPosts("All"));
    }
  }, [data]);

  const createTags = (list) => {
    const tags = new Set(); // Use Set for efficient unique tag storage

    list.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.add(tag); // Add unique tags to the Set
      });
    });

    return Array.from(tags); // Convert the Set back to an array if needed
  };
  const filterPosts = (tag) => {
    console.log(posts);
    if (tag === "All") return data.posts;
    return data.posts.filter((post) => post.tags.includes(tag));
  };

  if (isLoading) return <div> loading posts....</div>;
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
        {createTags(data.posts).map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </Select>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
