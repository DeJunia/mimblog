import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import NewPost from './components/newpost'
import PostPage from './components/postpage'
import About from './components/about'
import Missing from './components/missing'
import EditPost from './components/editPost'
import {format} from 'date-fns'
import api from './api/posts'
import useWindowSize from './hooks/useWindowSize'
import useAxiosFetch from './hooks/useAxiosFetch'


function App() {
 
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const title = 'mImBlog';

  useEffect(() =>{
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data)
      } catch(err) {
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);  
        } else {
          console.log(`Error: ${err.message}`);
        }
        
      }
    }

    fetchPosts();
  }, [])

  useEffect(() => {
    const filterResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLocaleLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filterResults.reverse());
  }, [posts, search])


  const handleSubmit = async (e) => {
      e.preventDefault();
      const id  = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const datetime = format( new Date(), 'MMMM dd, yyyy pp');
      const newPost = {id, title: postTitle, datetime, body: postBody };
      try {
        const response = await api.post('./posts', newPost)
        const allPosts = [ ...posts, response.data];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
  }

  const handleEdit = async (id) => {
    const datetime = format( new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = {id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      console.log(response.data)
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
      navigate('/')
    } catch(err) {
      console.log(`Error: ${err.message}`)
    }   
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postLists = posts.filter(post => post.id !== id);
      setPosts(postLists);
      navigate('/');
    } catch(err) {
      console.log(`Error: ${err.message}`)
    }
    
  }

  return (
    <div className='App'>

        <Header title={title}/>
        <Nav search={search} setSearch={setSearch}/>
        <Routes>
          <Route exact path='/' 
          element={<Home posts={searchResults} />}/>
          <Route path='/post' 
          element={<NewPost 
          postTitle={postTitle} 
          setPostTitle={setPostTitle} 
          postBody={postBody} 
          setPostBody={setPostBody} 
          handleSubmit={handleSubmit} />}/>
          <Route path='/edit/:id' 
          element={<EditPost
          posts={posts}
          editTitle={editTitle} 
          setEditTitle={setEditTitle} 
          editBody={editBody} 
          setEditBody={setEditBody} 
          handleEdit={handleEdit} />}/>
          <Route path='/post/:id' 
          element={<PostPage 
          posts={posts} 
          handleDelete={handleDelete}/>}/>
          <Route exact path='/about' element={<About
          width={width}/>}/>
          <Route exact path='/*' element={<Missing />}/>
        </Routes>

    </div>

  )
}

export default App
