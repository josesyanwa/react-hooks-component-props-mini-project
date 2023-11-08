import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

const posts = [
  {
    title: 'The Wet Code Base',
    date: '2023-01-15',
    preview: 'Come waste your time with me',
  },
  {
    title: 'Goodbye,Clean code',
    date:2020-1-11,
    preview: 'Let clean code guide you',
  },
];

function App() {
  return (
    <div className="App">
      
      <Header blogName="Overreacted" />
      <About
        imageSrc="https://via.placeholder.com/215Links to an external site."
        aboutText="Personal blog by Dan Abramov"
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;


