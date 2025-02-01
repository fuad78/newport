import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Server Setup for Web Hosting',
      description: "Configured and optimized Dell Supermicro servers for XeonBD's web hosting services.",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      tags: ['Ubuntu', 'LAMP Stack', 'Server Management'],
    },
    {
      title: 'Virtualization Infrastructure',
      description: 'Deployed private cloud infrastructure using VMware ESXi on Dell Supermicro hardware.',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=800',
      tags: ['VMware', 'Cloud', 'Virtualization'],
    },
    {
      title: 'Network Configuration',
      description: 'Managed enterprise network services including DNS, DHCP, and Active Directory.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      tags: ['Networking', 'Security', 'Infrastructure'],
    },
    {
      title: 'Load Balancing Setup',
      description: 'Implemented high-availability environment with clustering and load balancing.',
      image: 'https://i.postimg.cc/httHfTH2/images.png',
      tags: ['HAProxy', 'High Availability', 'Load Balancing'],
    },
    {
      title: 'AWS Cloud Infrastructure Setup',
      description: 'Architected and deployed scalable and secure cloud infrastructure on AWS to support business applications.',
      image: 'https://i.postimg.cc/Pr4ZyhZN/aws.png',
      tags: ['AWS', 'Cloud Infrastructure', 'Scalability'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Showcasing my technical expertise and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
