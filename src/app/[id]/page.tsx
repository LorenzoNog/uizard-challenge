import React from "react";

const IdPage = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  ).then(
    (res) => res.json() as Promise<{ title: string; url: string; by: string }>
  );
  return <iframe className="w-full h-full" src={post.url}></iframe>
};

export default IdPage;
