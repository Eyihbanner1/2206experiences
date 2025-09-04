'use client';

import { useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import BlogEditor from '../../components/ui/BlogEditor';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  publishDate: string;
  status: 'published' | 'draft';
  views: number;
  seoTitle: string;
  seoDescription: string;
  image: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('blog');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === '2206admin') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h1>
              <p className="text-gray-600">Enter password to access content management</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Login to Admin Panel
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Demo password: <code className="bg-gray-100 px-2 py-1 rounded">2206admin</code>
              </p>
            </div>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Admin Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
                <p className="text-gray-600">Manage your blog posts, gallery, and website content</p>
              </div>
              <Button 
                onClick={() => setIsAuthenticated(false)}
                variant="outline"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-8">
              {[
                { id: 'blog', label: 'Blog Posts', icon: '📝' },
                { id: 'gallery', label: 'Gallery', icon: '🖼️' },
                { id: 'trips', label: 'Trips', icon: '✈️' },
                { id: 'events', label: 'Events', icon: '🎉' },
                { id: 'settings', label: 'Settings', icon: '⚙️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 py-8">
          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}
          {activeTab === 'trips' && <TripsManagement />}
          {activeTab === 'events' && <EventsManagement />}
          {activeTab === 'settings' && <SettingsManagement />}
        </div>
      </div>
    </MainLayout>
  );
}

function BlogManagement() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: '1',
      title: 'Your First Trip to Africa: Essential Travel Tips',
      slug: 'first-trip-africa-travel-tips',
      excerpt: 'Essential tips for planning your first African adventure',
      content: '# Your First Trip to Africa\n\nPlanning your first trip to Africa can feel overwhelming, but with the right preparation, it can be the adventure of a lifetime...',
      author: '2206 Experiences Team',
      category: 'Travel Tips',
      tags: ['africa', 'travel-tips', 'first-time'],
      featured: true,
      publishDate: '2024-01-15',
      status: 'published' as const,
      views: 1250,
      seoTitle: 'Your First Trip to Africa: Essential Travel Tips',
      seoDescription: 'Essential tips for planning your first African adventure',
      image: '/images/blog/africa-travel-tips.jpg'
    },
    {
      id: '2',
      title: 'Africa Visa Guide 2024',
      slug: 'africa-visa-guide-2024',
      excerpt: 'Complete guide to visas for African countries',
      content: '# Africa Visa Guide 2024\n\nNavigating visa requirements for Africa can be complex...',
      author: '2206 Experiences Team',
      category: 'Visa Information',
      tags: ['visa', 'africa', 'guide'],
      featured: false,
      publishDate: '2024-01-10',
      status: 'published' as const,
      views: 890,
      seoTitle: 'Africa Visa Guide 2024 - Complete Requirements',
      seoDescription: 'Complete guide to visa requirements for traveling to African countries',
      image: '/images/blog/visa-guide.jpg'
    },
    {
      id: '3',
      title: 'Budget Travel in Africa',
      slug: 'budget-travel-africa',
      excerpt: 'How to explore Africa on a budget',
      content: '# Budget Travel in Africa\n\nAfrica doesn\'t have to break the bank...',
      author: '2206 Experiences Team',
      category: 'Budget Travel',
      tags: ['budget', 'africa', 'backpacking'],
      featured: false,
      publishDate: '2024-01-08',
      status: 'draft' as const,
      views: 0,
      seoTitle: 'Budget Travel in Africa - Complete Guide',
      seoDescription: 'Learn how to explore Africa on a budget with our comprehensive guide',
      image: '/images/blog/budget-travel.jpg'
    }
  ]);

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const handleSavePost = (postData: Omit<BlogPost, 'id' | 'views'>) => {
    if (editingPost) {
      // Update existing post
      setBlogPosts(prev => prev.map(post => 
        post.id === editingPost.id 
          ? { ...postData, id: editingPost.id, views: post.views } 
          : post
      ));
    } else {
      // Create new post
      const newPost = {
        ...postData,
        id: Date.now().toString(),
        views: 0
      };
      setBlogPosts(prev => [newPost, ...prev]);
    }
    setShowEditor(false);
    setEditingPost(null);
  };

  const handleDeletePost = (postId: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(prev => prev.filter(post => post.id !== postId));
    }
  };

  if (showEditor) {
    return (
      <BlogEditor
        post={editingPost || undefined}
        onSave={handleSavePost}
        onCancel={() => {
          setShowEditor(false);
          setEditingPost(null);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Blog Posts</h2>
        <Button variant="primary" onClick={handleCreatePost}>
          <span className="mr-2">+</span>
          New Post
        </Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Author</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Views</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.id} className="border-t border-gray-200">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{post.title}</div>
                    {post.featured && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                        ⭐ Featured
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{post.author}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{post.publishDate}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{post.views.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function GalleryManagement() {
  const [images] = useState([
    { id: 1, title: 'Lake District Adventure', category: 'trips', date: '2024-12-15' },
    { id: 2, title: 'London Boat Cruise', category: 'events', date: '2024-12-10' },
    { id: 3, title: 'Albania Hiking Group', category: 'trips', date: '2024-11-28' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Gallery Management</h2>
        <Button variant="primary">
          <span className="mr-2">+</span>
          Upload Images
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{image.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">{image.category}</span>
                <span className="text-sm text-gray-500">{image.date}</span>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Delete</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upload Area */}
      <Card className="p-8 border-2 border-dashed border-gray-300 text-center">
        <div className="text-4xl mb-4">📤</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload New Images</h3>
        <p className="text-gray-600 mb-4">Drag and drop images here or click to browse</p>
        <Button variant="primary">Choose Files</Button>
      </Card>
    </div>
  );
}

function TripsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Trips Management</h2>
        <Button variant="primary">
          <span className="mr-2">+</span>
          New Trip
        </Button>
      </div>
      
      <Card className="p-8 text-center">
        <div className="text-4xl mb-4">✈️</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Your Trips</h3>
        <p className="text-gray-600">Add, edit, and organize your travel experiences</p>
      </Card>
    </div>
  );
}

function EventsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Events Management</h2>
        <Button variant="primary">
          <span className="mr-2">+</span>
          New Event
        </Button>
      </div>
      
      <Card className="p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Your Events</h3>
        <p className="text-gray-600">Create and organize your community events</p>
      </Card>
    </div>
  );
}

function SettingsManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Website Settings</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Site Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
              <input 
                type="text" 
                defaultValue="2206 Experiences" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
              <input 
                type="text" 
                defaultValue="Adventures. Events. Community." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Social Media</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
              <input 
                type="url" 
                placeholder="Instagram URL" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
              <input 
                type="url" 
                placeholder="Twitter URL" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button variant="primary">Save Settings</Button>
      </div>
    </div>
  );
}
