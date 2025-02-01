import React, { useState } from 'react';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: 'Optimizing Server Performance',
      excerpt: 'Learn about the best practices for optimizing Dell Supermicro server performance...',
      content: 'Detailed article about optimizing server performance...',
      date: '2024-03-15',
      author: 'KM Fuad Hasan',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Cloud Migration Strategies',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud...',
      content: 'Detailed insights on cloud migration strategies...',
      date: '2024-03-10',
      author: 'KM Fuad Hasan',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Security Best Practices',
      excerpt: 'Essential security measures for protecting your infrastructure...',
      content: 'Important security measures and best practices...',
      date: '2024-03-05',
      author: 'KM Fuad Hasan',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    },
   
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Blog</h2>
          <p className="mt-4 text-lg text-gray-600">
           <b> Insights and experiences from my journey in IT</b>
          </p>
        </div>

        {selectedPost ? (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className="text-blue-600 mb-4">Back to blog list</button>
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-4">{selectedPost.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="mr-4">{selectedPost.date}</span>
              <User className="w-4 h-4 mr-1" />
              <span>{selectedPost.author}</span>
            </div>
            <p className="text-gray-700">{selectedPost.content}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
