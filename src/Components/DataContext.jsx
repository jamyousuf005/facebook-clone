import { useMemo, useRef } from "react";
import { createContext, useState } from "react";
import post1 from "../../Assets/Posts/post1.jpg";
import post2 from "../../Assets/Posts/post2.jpg";
import post3 from "../../Assets/Posts/post3.jpg";
import post4 from "../../Assets/Posts/post4.jpg";
import post5 from "../../Assets/Posts/post5.jpg";
import post6 from "../../Assets/Posts/post6.jpg";
import post7 from "../../Assets/Posts/post7.jpg";
import post8 from "../../Assets/Posts/post8.jpg";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
   
    const [friendsList, setFriendsList] = useState([
        { id: '1', name: 'Ameen', img: post1 ,
            videoUrl: 'https://youtu.be/Z1BCujX3pw8?si=abcd1234',
            caption: 'Captain marvel',
            likes: 120,
         },
        { id: '2', name: 'Ikram', img: post2 ,
            videoUrl: 'https://youtu.be/3fumBcKC6RE?si=efgh5678',
            caption: 'lil wayne.ft-john',
            likes: 98,
        },
       
        {
             id: '3', name: 'Uzair', img: post3 ,
            videoUrl: 'https://youtu.be/RY32wSQDekE?si=A1NblayG5n63xLMO',
            caption: 'Computer Networking',
            likes: 85,            
        },
        { 
            id: '4', name: 'Gazanfar', img: post4,
            videoUrl: 'https://youtu.be/VYOjWnS4cMY?si=ijkl9012',
            caption: 'Childish Gambino',
            likes: 243,
         },
        { 
            id: '5', name: 'Ali Muhammad', img: post5,
            videoUrl: 'https://youtu.be/e-ORhEE9VVg?si=mnop3456',
            caption: 'Taylor swift',
            likes: 75,
         },
        { 
            id: '6', name: 'Virat Kohli', img: post6,
            videoUrl: 'https://youtu.be/kXYiU_JCYtU?si=qrst7890',
            caption: 'Numb',
            likes: 153,
          
         },
        {
            id: '7', name: 'Grace', img: post7,
            videoUrl: 'https://youtu.be/2vjPBrBU-TM?si=uvwx1234',
            caption: 'Sia-Chandelier',
            likes: 61,
         },
        { id: '8', name: 'Harry', img: post8,
            videoUrl: 'https://youtu.be/L_jWHffIx5E?si=yzab5678',
            caption: 'Smash Mouth',
            likes: 212,
         }
    ])

    const stories = [
        { id: 1, name: "Ameen", img: "../../Assets/ameen.jpeg" },
        { id: 2, name: "Virat Kohli", img: "../../Assets/kohli.jpg" },
        { id: 3, name: "Uzair", img: "../../Assets/uzair.avif" },
        { id: 4, name: "Ikram", img: "../../Assets/ikram.jpg" },
        { id: 5, name: "Ali Muhammad", img: "../../Assets/ali muhammad.avif" },
        { id: 6, name: "Gazanfar", img: "../../Assets/Gazanfar.jpg" },
        { id: 7, name: "Grace", img: "../../Assets/Posts/2ndlast.jpg" },
        { id: 8, name: "Harry", img: "../../Assets/Posts/last.webp" },
    ];


   

      

    const hiddenFileInput = useRef(null)
    const [uploadPhoto, setUploadPhoto] = useState(null)

    // Initialize post states for likes and comments
    const [postStates, setPostStates] = useState(
        friendsList.reduce((acc, post) => {
            acc[post.id] = {
                likes: 0,
                isLiked: false,
                commentText: '',
                showCommentBox: false,
                comments: []
            };
            return acc;
        }, {})
    );

    // Handle like functionality
    const handleLike = (postId) => {
        setPostStates(prev => {
            const post = prev[postId];
            const newLikeCount = post.isLiked ? post.likes - 1 : post.likes + 1;
            
            return {
                ...prev,
                [postId]: {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: newLikeCount
                }
            };
        });
    };

    // Toggle comment box visibility
    const toggleComment = (postId) => {
        setPostStates(prev => ({
            ...prev,
            [postId]: {
                ...prev[postId],
                showCommentBox: !prev[postId].showCommentBox
            }
        }));
    };

    // Update comment text
    const handleCommentChange = (postId, value) => {
        setPostStates(prev => ({
            ...prev,
            [postId]: {
                ...prev[postId],
                commentText: value
            }
        }));
    };

    // Submit a comment
    const handleKeyPress = (event, postId) => {
        if (event.key === 'Enter' && postStates[postId].commentText.trim() !== '') {
            setPostStates(prev => {
                const newComment = {
                    id: Date.now(),
                    text: prev[postId].commentText,
                    user: 'Jam Yousuf',
                    timestamp: new Date().toISOString()
                };
                
                return {
                    ...prev,
                    [postId]: {
                        ...prev[postId],
                        comments: [...prev[postId].comments, newComment],
                        commentText: ''
                    }
                };
            });
        }
    };

    const handleUploadChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const [searchFriends, setSearchFriends] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchFriends(e.target.value)
    }

    const filteredFriends = useMemo(() => {
        return friendsList.filter((friend) =>
            friend.name.toLowerCase().includes(searchFriends.toLowerCase()))
    }, [searchFriends, friendsList])

    const [searchNewVisible, setSearchNewVisible] = useState(false)

    const toggleNewSearch = () => {
        setSearchNewVisible(!searchNewVisible)
    }

    const addNewPost = (newPost) => {
        console.log('Adding new post:', newPost);
        setFriendsList(prevList => {
            console.log('Previous list:', prevList);
            const updatedList = [newPost, ...prevList];
            console.log('Updated list:', updatedList);
            return updatedList;
        });
    }

    return (
        <DataContext.Provider value={{
            searchFriends, handleChange, friendsList, filteredFriends,
            searchNewVisible, toggleNewSearch, stories, hiddenFileInput, handleUploadChange, handleClick,
            uploadPhoto, addNewPost, setFriendsList,
            // Add new context values
            postStates,
            handleLike,
            toggleComment,
            handleCommentChange,
            handleKeyPress
        }}>
            {children}
        </DataContext.Provider>
    )
}

