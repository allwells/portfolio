import "./Home.css";

import { Card, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Button } from "@mantine/core";
import CategoryBadge from "../Badge/CategoryBadge";
import DatePublished from "../DatePublished/DatePublished";
import Footer from "../Footer/Footer";
import { Loader } from "@mantine/core";
import NavBar from "../NavBar/NavBar";
import NewsCard from "../NewsCards/NewsCard";
import Purify from "../../utils/Purify";
import SelectForm from "../SelectForm/SelectForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/posts`)
        .then((res) => {
          setBlogs(res.data.blogs.reverse().slice(5));
          setLatestNews(
            res.data.blogs
              .reverse()
              .slice(-5)
              .reverse()
          );
          setLoading(!loading);
        })
        .catch((err) => {
          // set error, to display to user
          // console.log(err);
        });
    };
    fetchPosts();
  }, []);

  const handlePost = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="latest-news">
          {latestNews.length > 0
            ? latestNews.map((blog) => {
                return (
                  <NewsCard
                    key={blog._id}
                    blog={blog}
                    onClick={() => {
                      handlePost(blog._id);
                    }}
                  />
                );
              })
            : null}
        </div>
        {loading ? (
          <div className="loader">
            <Loader size="sm" variant="bars" />
          </div>
        ) : (
          <Container>
            <div className={blogs.length > 0 ? "explore" : "no-explore"}>
              <h1 className="main-heading" align="center">
                Explore news posts:
              </h1>
              <SelectForm
                errorMsg={false}
                category={category}
                placeholder="Category"
                setCategory={setCategory}
              />
              <Button ml={10} onClick={() => setCategory("")} variant="subtle">
                Cancel
              </Button>
            </div>
            {blogs.length > 0 ? (
              blogs.map((blog) => {
                if (category === "" || category === null) {
                  return (
                    <Card className="blog-card" key={blog._id}>
                      {blog.cloudinaryId ? (
                        <Card.Img variant="top" src={blog.image} />
                      ) : null}
                      <Card.Body>
                        <h1>{blog.title}</h1>
                        <div className="createdAt">
                          <DatePublished blog={blog} />
                          <CategoryBadge
                            blog={blog}
                            onClick={() => setCategory("")}
                          />
                        </div>
                        <div className="blog-items">
                          <Button
                            className="readMore"
                            onClick={() => {
                              handlePost(blog._id);
                            }}
                          >
                            Read More
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                } else {
                  if (category === blog.category) {
                    return (
                      <Card className="blog-card" key={blog._id}>
                        {blog.cloudinaryId ? (
                          <Card.Img variant="top" src={blog.image} />
                        ) : null}
                        <Card.Body>
                          <h1>{blog.title}</h1>
                          <div className="createdAt">
                            <span className="date">
                              {new Date(blog.created_at).toDateString()}
                            </span>
                            <span
                              className="category"
                              onClick={() => setCategory(blog.category)}
                            >
                              {Purify(blog.category)}
                            </span>
                          </div>
                          <div className="blog-items">
                            <Button
                              className="readMore"
                              onClick={() => {
                                handlePost(blog._id);
                              }}
                            >
                              Read More
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    );
                  } else {
                    return null;
                  }
                }
              })
            ) : (
              <>
                <h1 className="no-post">No Post Available</h1>
              </>
            )}
          </Container>
        )}
      </div>
      <Footer />
    </>
  );
}
