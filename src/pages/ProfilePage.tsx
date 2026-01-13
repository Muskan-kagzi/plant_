// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { User, Heart, Bookmark, FileText, LogOut, LogIn, Mail, Lock, Leaf } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import TopNavbar from '@/components/navigation/TopNavbar';
// import BottomNavbar from '@/components/navigation/BottomNavbar';
// import PlantCard from '@/components/plants/PlantCard';
// import AIChatbot from '@/components/chat/AIChatbot';
// import { useApp } from '@/context/AppContext';
// import { useToast } from '@/hooks/use-toast';

// const ProfilePage: React.FC = () => {
//   const { user, isAuthenticated, login, logout, plants, posts } = useApp();
//   const { toast } = useToast();
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [isLoading, setIsLoading] = useState(false);

//   const likedPlants = plants.filter((p) => p.isLiked);
//   const bookmarkedPlants = plants.filter((p) => p.isBookmarked);
//   const userPosts = posts.filter((p) => p.userId === user?.id);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!loginData.email || !loginData.password) {
//       toast({
//         title: 'Missing information',
//         description: 'Please enter email and password.',
//         variant: 'destructive',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const success = await login(loginData.email, loginData.password);
//       if (success) {
//         toast({
//           title: 'Welcome back! 🌿',
//           description: 'You have successfully signed in.',
//         });
//       }
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to sign in. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     toast({
//       title: 'Signed out',
//       description: 'You have been signed out successfully.',
//     });
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-background">
//         <TopNavbar />
//         <BottomNavbar />

//         <main className="pt-20 pb-24 md:pb-8">
//           <div className="container mx-auto px-6 max-w-md">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mb-8"
//             >
//               <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
//                 <Leaf className="w-10 h-10 text-primary" />
//               </div>
//               <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
//                 Welcome to AYUSH Garden
//               </h1>
//               <p className="text-muted-foreground">
//                 Sign in to save your favorite plants and share your experiences
//               </p>
//             </motion.div>

//             <motion.form
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               onSubmit={handleLogin}
//               className="bg-card rounded-2xl p-6 card-shadow border border-border space-y-6"
//             >
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     value={loginData.email}
//                     onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                     className="pl-10 h-12"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="password"
//                     type="password"
//                     placeholder="••••••••"
//                     value={loginData.password}
//                     onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                     className="pl-10 h-12"
//                   />
//                 </div>
//               </div>

//               <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
//                 {isLoading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
//                     Signing in...
//                   </>
//                 ) : (
//                   <>
//                     <LogIn className="w-4 h-4" />
//                     Sign In
//                   </>
//                 )}
//               </Button>

//               <p className="text-center text-sm text-muted-foreground">
//                 Demo mode: Enter any email and password to sign in
//               </p>
//             </motion.form>
//           </div>
//         </main>

//         <AIChatbot />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <TopNavbar />
//       <BottomNavbar />

//       <main className="pt-20 pb-24 md:pb-8">
//         <div className="container mx-auto px-6">
//           {/* Profile Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-card rounded-2xl p-6 card-shadow border border-border mb-8"
//           >
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//               <img
//                 src={user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'}
//                 alt={user?.name}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-primary"
//               />
//               <div className="flex-1 text-center md:text-left">
//                 <h1 className="font-serif text-2xl font-bold text-foreground mb-1">
//                   {user?.name}
//                 </h1>
//                 <p className="text-muted-foreground mb-4">{user?.email}</p>
//                 <div className="flex flex-wrap justify-center md:justify-start gap-3">
//                   <Badge variant="secondary" className="gap-1">
//                     <Heart className="w-3 h-3" />
//                     {likedPlants.length} Liked
//                   </Badge>
//                   <Badge variant="secondary" className="gap-1">
//                     <Bookmark className="w-3 h-3" />
//                     {bookmarkedPlants.length} Saved
//                   </Badge>
//                   <Badge variant="secondary" className="gap-1">
//                     <FileText className="w-3 h-3" />
//                     {userPosts.length} Posts
//                   </Badge>
//                 </div>
//               </div>
//               <Button variant="outline" onClick={handleLogout} className="gap-2">
//                 <LogOut className="w-4 h-4" />
//                 Sign Out
//               </Button>
//             </div>
//           </motion.div>

//           {/* Tabs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <Tabs defaultValue="liked" className="w-full">
//               <TabsList className="w-full md:w-auto mb-6">
//                 <TabsTrigger value="liked" className="gap-2 flex-1 md:flex-none">
//                   <Heart className="w-4 h-4" />
//                   Liked Plants
//                 </TabsTrigger>
//                 <TabsTrigger value="bookmarked" className="gap-2 flex-1 md:flex-none">
//                   <Bookmark className="w-4 h-4" />
//                   Saved Plants
//                 </TabsTrigger>
//                 <TabsTrigger value="posts" className="gap-2 flex-1 md:flex-none">
//                   <FileText className="w-4 h-4" />
//                   My Posts
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="liked">
//                 {likedPlants.length > 0 ? (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {likedPlants.map((plant, index) => (
//                       <motion.div
//                         key={plant.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                       >
//                         <PlantCard plant={plant} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <Heart className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No liked plants yet</p>
//                     <p className="text-sm text-muted-foreground/70">
//                       Explore plants and click the heart icon to like them
//                     </p>
//                   </div>
//                 )}
//               </TabsContent>

//               <TabsContent value="bookmarked">
//                 {bookmarkedPlants.length > 0 ? (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {bookmarkedPlants.map((plant, index) => (
//                       <motion.div
//                         key={plant.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                       >
//                         <PlantCard plant={plant} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <Bookmark className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No saved plants yet</p>
//                     <p className="text-sm text-muted-foreground/70">
//                       Click the bookmark icon on any plant to save it
//                     </p>
//                   </div>
//                 )}
//               </TabsContent>

//               <TabsContent value="posts">
//                 {userPosts.length > 0 ? (
//                   <div className="space-y-4">
//                     {userPosts.map((post, index) => (
//                       <motion.div
//                         key={post.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         className="bg-card rounded-xl p-6 card-shadow border border-border"
//                       >
//                         <div className="flex items-start gap-4">
//                           {post.imageUrl && (
//                             <img
//                               src={post.imageUrl}
//                               alt={post.plantName}
//                               className="w-20 h-20 rounded-lg object-cover"
//                             />
//                           )}
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <h3 className="font-semibold text-foreground">{post.plantName}</h3>
//                               <Badge variant={post.isApproved ? 'default' : 'secondary'}>
//                                 {post.isApproved ? 'Published' : 'Pending'}
//                               </Badge>
//                             </div>
//                             <p className="text-sm text-muted-foreground line-clamp-2">
//                               {post.description}
//                             </p>
//                             <p className="text-xs text-muted-foreground mt-2">
//                               {post.createdAt.toLocaleDateString()} • {post.likes} likes
//                             </p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <FileText className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No posts yet</p>
//                     <p className="text-sm text-muted-foreground/70">
//                       Share your experience with medicinal plants
//                     </p>
//                   </div>
//                 )}
//               </TabsContent>
//             </Tabs>
//           </motion.div>
//         </div>
//       </main>

//       <AIChatbot />
//     </div>
//   );
// };

// export default ProfilePage;









// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import {
//   User,
//   Heart,
//   Bookmark,
//   FileText,
//   LogOut,
//   LogIn,
//   Mail,
//   Lock,
//   Leaf,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import TopNavbar from '@/components/navigation/TopNavbar';
// import BottomNavbar from '@/components/navigation/BottomNavbar';
// import PlantCard from '@/components/plants/PlantCard';
// import AIChatbot from '@/components/chat/AIChatbot';
// import { useApp } from '@/context/AppContext';
// import { useToast } from '@/hooks/use-toast';
// import { Plant, PlantCategory, UserPost } from '@/types';

// const ProfilePage: React.FC = () => {
//   const { user, isAuthenticated, login, logout, signup, plants, posts } = useApp();
//   const { toast } = useToast();

//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
//   const [isSignup, setIsSignup] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [savedPosts, setSavedPosts] = useState<any[]>([]);

//   // Fetch saved posts
//   useEffect(() => {
//     if (!isAuthenticated) {
//       setSavedPosts([]);
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get("http://localhost:5000/api/saved", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setSavedPosts(res.data))
//       .catch((err) => console.error("Fetch saved failed", err));
//   }, [isAuthenticated]);

//   // Filter liked plants
//   const likedPlants = plants.filter((p) => p.isLiked);

//   // Map saved posts to Plant type safely
//   const bookmarkedPlants: Plant[] = savedPosts.map((item) => ({
//     id: item.post._id,
//     name: item.post.plantName,
//     botanicalName: "Community Contribution",
//     description: item.post.description,
//     medicinalUse: item.post.description,
//     imageUrl: item.post.imageUrl
//       ? `http://localhost:5000/${item.post.imageUrl.replace(/\\/g, "/")}`
//       : "/placeholder.png",
//     category: "community" as PlantCategory, // ✅ TS-safe
//     location: { lat: 0, lng: 0, region: "Unknown" },
//     ayushSystem: [],
//     likes: 0,
//     isLiked: false,
//     isBookmarked: true,
//   }));

//   const userPosts = posts.filter((p) => p.userId === user?.id);

//   // 🔐 LOGIN
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!loginData.email || !loginData.password) {
//       toast({
//         title: 'Missing information',
//         description: 'Please enter email and password.',
//         variant: 'destructive',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const success = await login(loginData.email, loginData.password);
//       if (success) {
//         toast({
//           title: 'Welcome back! 🌿',
//           description: 'You have successfully signed in.',
//         });
//       }
//     } catch {
//       toast({
//         title: 'Error',
//         description: 'Failed to sign in. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ➕ SIGNUP
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!signupData.name || !signupData.email || !signupData.password) {
//       toast({
//         title: 'Missing information',
//         description: 'Please enter name, email, and password.',
//         variant: 'destructive',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const success = await signup(signupData.name, signupData.email, signupData.password);
//       if (success) {
//         toast({
//           title: 'Account created! 🌿',
//           description: 'You can now login with your credentials.',
//         });
//         setIsSignup(false);
//       }
//     } catch {
//       toast({
//         title: 'Error',
//         description: 'Failed to sign up. Please try again.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // 🚪 LOGOUT
//   const handleLogout = () => {
//     logout();
//     toast({
//       title: 'Signed out',
//       description: 'You have been signed out successfully.',
//     });
//   };

//   // 🔄 If user is not authenticated, show login/signup form
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-background">
//         <TopNavbar />
//         <BottomNavbar />
//         <main className="pt-20 pb-24 md:pb-8">
//           <div className="container mx-auto px-6 max-w-md">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center mb-8"
//             >
//               <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
//                 <Leaf className="w-10 h-10 text-primary" />
//               </div>
//               <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
//                 Welcome to AYUSH Garden
//               </h1>
//               <p className="text-muted-foreground">
//                 {isSignup
//                   ? 'Create an account to save your favorite plants and share experiences'
//                   : 'Sign in to save your favorite plants and share experiences'}
//               </p>
//             </motion.div>

//             <motion.form
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               onSubmit={isSignup ? handleSignup : handleLogin}
//               className="bg-card rounded-2xl p-6 card-shadow border border-border space-y-6"
//             >
//               {isSignup && (
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                     id="name"
//                     placeholder="Your Name"
//                     value={signupData.name}
//                     onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
//                     className="h-12"
//                   />
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     value={isSignup ? signupData.email : loginData.email}
//                     onChange={(e) =>
//                       isSignup
//                         ? setSignupData({ ...signupData, email: e.target.value })
//                         : setLoginData({ ...loginData, email: e.target.value })
//                     }
//                     className="pl-10 h-12"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                   <Input
//                     id="password"
//                     type="password"
//                     placeholder="••••••••"
//                     value={isSignup ? signupData.password : loginData.password}
//                     onChange={(e) =>
//                       isSignup
//                         ? setSignupData({ ...signupData, password: e.target.value })
//                         : setLoginData({ ...loginData, password: e.target.value })
//                     }
//                     className="pl-10 h-12"
//                   />
//                 </div>
//               </div>

//               <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
//                 {isLoading
//                   ? isSignup
//                     ? 'Creating account...'
//                     : 'Signing in...'
//                   : isSignup
//                   ? 'Sign Up'
//                   : 'Sign In'}
//               </Button>

//               <p className="text-center text-sm text-muted-foreground mt-4">
//                 {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
//                 <button
//                   type="button"
//                   className="text-primary font-semibold"
//                   onClick={() => setIsSignup(!isSignup)}
//                 >
//                   {isSignup ? 'Login' : 'Sign Up'}
//                 </button>
//               </p>
//             </motion.form>
//           </div>
//         </main>

//         <AIChatbot />
//       </div>
//     );
//   }

//   // ✅ Authenticated user view
//   return (
//     <div className="min-h-screen bg-background">
//       <TopNavbar />
//       <BottomNavbar />

//       <main className="pt-20 pb-24 md:pb-8">
//         <div className="container mx-auto px-6">
//           {/* Profile Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-card rounded-2xl p-6 card-shadow border border-border mb-8"
//           >
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//               <img
//                 src={user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'}
//                 alt={user?.name}
//                 className="w-24 h-24 rounded-full object-cover border-4 border-primary"
//               />
//               <div className="flex-1 text-center md:text-left">
//                 <h1 className="font-serif text-2xl font-bold text-foreground mb-1">{user?.name}</h1>
//                 <p className="text-muted-foreground mb-4">{user?.email}</p>
//                 <div className="flex flex-wrap justify-center md:justify-start gap-3">
//                   <Badge variant="secondary" className="gap-1">
//                     <Heart className="w-3 h-3" />
//                     {likedPlants.length} Liked
//                   </Badge>
//                   <Badge variant="secondary" className="gap-1">
//                     <Bookmark className="w-3 h-3" />
//                     {bookmarkedPlants.length} Saved
//                   </Badge>
//                   <Badge variant="secondary" className="gap-1">
//                     <FileText className="w-3 h-3" />
//                     {userPosts.length} Posts
//                   </Badge>
//                 </div>
//               </div>
//               <Button variant="outline" onClick={handleLogout} className="gap-2">
//                 <LogOut className="w-4 h-4" />
//                 Sign Out
//               </Button>
//             </div>
//           </motion.div>

//           {/* Tabs */}
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//             <Tabs defaultValue="liked" className="w-full">
//               <TabsList className="w-full md:w-auto mb-6">
//                 <TabsTrigger value="liked" className="gap-2 flex-1 md:flex-none">
//                   <Heart className="w-4 h-4" />
//                   Liked Plants
//                 </TabsTrigger>
//                 <TabsTrigger value="bookmarked" className="gap-2 flex-1 md:flex-none">
//                   <Bookmark className="w-4 h-4" />
//                   Saved Plants
//                 </TabsTrigger>
//                 <TabsTrigger value="posts" className="gap-2 flex-1 md:flex-none">
//                   <FileText className="w-4 h-4" />
//                   My Posts
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="liked">
//                 {likedPlants.length > 0 ? (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {likedPlants.map((plant, index) => (
//                       <motion.div
//                         key={plant.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                       >
//                         <PlantCard plant={plant} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <Heart className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No liked plants yet</p>
//                     <p className="text-sm text-muted-foreground/70">
//                       Explore plants and click the heart icon to like them
//                     </p>
//                   </div>
//                 )}
//               </TabsContent>

//               <TabsContent value="bookmarked">
//                 {bookmarkedPlants.length > 0 ? (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {bookmarkedPlants.map((plant, index) => (
//                       <motion.div
//                         key={plant.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                       >
//                         <PlantCard plant={plant} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <Bookmark className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No saved plants yet</p>
//                     <p className="text-sm text-muted-foreground/70">
//                       Click the bookmark icon on any plant to save it
//                     </p>
//                   </div>
//                 )}
//               </TabsContent>

//               <TabsContent value="posts">
//                 {userPosts.length > 0 ? (
//                   <div className="space-y-4">
//                     {userPosts.map((post, index) => (
//                       <motion.div
//                         key={post.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.05 }}
//                         className="bg-card rounded-xl p-6 card-shadow border border-border"
//                       >
//                         <div className="flex items-start gap-4">
//                           {post.imageUrl && (
//                             <img src={post.imageUrl} alt={post.plantName} className="w-20 h-20 rounded-lg object-cover" />
//                           )}
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <h3 className="font-semibold text-foreground">{post.plantName}</h3>
//                               <Badge variant={post.isApproved ? 'default' : 'secondary'}>
//                                 {post.isApproved ? 'Published' : 'Pending'}
//                               </Badge>
//                             </div>
//                             <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
//                             <p className="text-xs text-muted-foreground mt-2">{new Date(post.createdAt).toLocaleDateString()} • {post.likes} likes</p>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-16 bg-card rounded-xl">
//                     <FileText className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
//                     <p className="text-muted-foreground">No posts yet</p>
//                     <p className="text-sm text-muted-foreground/70">Share your experience with medicinal plants</p>
//                   </div>
//                 )}
//               </TabsContent>
//             </Tabs>
//           </motion.div>
//         </div>
//       </main>

//       <AIChatbot />
//     </div>
//   );
// };

// export default ProfilePage;






// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import {
//   User,
//   Heart,
//   Bookmark,
//   FileText,
//   LogOut,
//   LogIn,
//   Mail,
//   Lock,
//   Leaf,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import TopNavbar from '@/components/navigation/TopNavbar';
// import BottomNavbar from '@/components/navigation/BottomNavbar';
// import PlantCard from '@/components/plants/PlantCard';
// import AIChatbot from '@/components/chat/AIChatbot';
// import { useApp } from '@/context/AppContext';
// import { useToast } from '@/hooks/use-toast';
// import { Plant, PlantCategory, UserPost } from '@/types';

// const ProfilePage: React.FC = () => {
//   const { user, isAuthenticated, login, logout, signup, plants, posts } = useApp();
//   const { toast } = useToast();

//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
//   const [isSignup, setIsSignup] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [savedPosts, setSavedPosts] = useState<any[]>([]);
  
//   // NEW: Liked plants from database
//   const [likedBackendPlants, setLikedBackendPlants] = useState<Plant[]>([]);

//   // 1. Fetch Saved/Bookmarked posts (Existing)
//   useEffect(() => {
//     if (!isAuthenticated) {
//       setSavedPosts([]);
//       return;
//     }
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     axios
//       .get("http://localhost:5000/api/saved", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setSavedPosts(res.data))
//       .catch((err) => console.error("Fetch saved failed", err));
//   }, [isAuthenticated]);

//   // 2. NEW: Fetch Liked Plants from Database logic
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       const userId = user.id || user._id;
//       axios
//         .get(`http://localhost:5000/api/liked/user/${userId}`)
//         .then((res) => {
//           // Yahan hum database se aayi hui list ko convert karenge
//           const formattedLikes: Plant[] = res.data.map((item: any) => ({
//             ...item.post, // Post ki details
//             id: item.post._id,
//             isLiked: true // Database se aa raha hai toh liked hi hoga
//           }));
//           setLikedBackendPlants(formattedLikes);
//         })
//         .catch((err) => console.error("Error fetching likes", err));
//     } else {
//         setLikedBackendPlants([]);
//     }
//   }, [isAuthenticated, user]);

//   // Map saved posts to Plant type safely
//   const bookmarkedPlants: Plant[] = savedPosts.map((item) => ({
//     id: item.post._id,
//     name: item.post.plantName,
//     botanicalName: "Community Contribution",
//     description: item.post.description,
//     medicinalUse: item.post.description,
//     imageUrl: item.post.imageUrl
//       ? `http://localhost:5000/${item.post.imageUrl.replace(/\\/g, "/")}`
//       : "/placeholder.png",
//     category: "community" as PlantCategory,
//     location: { lat: 0, lng: 0, region: "Unknown" },
//     ayushSystem: [],
//     likes: 0,
//     isLiked: false,
//     isBookmarked: true,
//   }));

//   const userPosts = posts.filter((p) => p.userId === (user?.id || user?.id));

//   // LOGIN, SIGNUP, LOGOUT handlers... (Keep them as they were)
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!loginData.email || !loginData.password) {
//       toast({ title: 'Missing information', description: 'Please enter email and password.', variant: 'destructive' });
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const success = await login(loginData.email, loginData.password);
//       if (success) toast({ title: 'Welcome back! 🌿', description: 'You have successfully signed in.' });
//     } catch {
//       toast({ title: 'Error', description: 'Failed to sign in. Please try again.', variant: 'destructive' });
//     } finally { setIsLoading(false); }
//   };

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!signupData.name || !signupData.email || !signupData.password) {
//       toast({ title: 'Missing information', description: 'Please enter name, email, and password.', variant: 'destructive' });
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const success = await signup(signupData.name, signupData.email, signupData.password);
//       if (success) {
//         toast({ title: 'Account created! 🌿', description: 'You can now login with your credentials.' });
//         setIsSignup(false);
//       }
//     } catch {
//       toast({ title: 'Error', description: 'Failed to sign up. Please try again.', variant: 'destructive' });
//     } finally { setIsLoading(false); }
//   };

//   const handleLogout = () => {
//     logout();
//     toast({ title: 'Signed out', description: 'You have been signed out successfully.' });
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-background">
//         <TopNavbar />
//         <BottomNavbar />
//         <main className="pt-20 pb-24 md:pb-8">
//           <div className="container mx-auto px-6 max-w-md">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
//               <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
//                 <Leaf className="w-10 h-10 text-primary" />
//               </div>
//               <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Welcome to AYUSH Garden</h1>
//               <p className="text-muted-foreground">{isSignup ? 'Create an account' : 'Sign in to your account'}</p>
//             </motion.div>
//             <form onSubmit={isSignup ? handleSignup : handleLogin} className="bg-card rounded-2xl p-6 border space-y-6 shadow-sm">
//               {isSignup && (
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
//                 </div>
//               )}
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" value={isSignup ? signupData.email : loginData.email} onChange={(e) => isSignup ? setSignupData({ ...signupData, email: e.target.value }) : setLoginData({ ...loginData, email: e.target.value })} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" type="password" value={isSignup ? signupData.password : loginData.password} onChange={(e) => isSignup ? setSignupData({ ...signupData, password: e.target.value }) : setLoginData({ ...loginData, password: e.target.value })} />
//               </div>
//               <Button type="submit" className="w-full" disabled={isLoading}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
//               <button type="button" className="w-full text-sm text-primary font-medium" onClick={() => setIsSignup(!isSignup)}>
//                 {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//               </button>
//             </form>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <TopNavbar />
//       <BottomNavbar />

//       <main className="pt-20 pb-24 md:pb-8">
//         <div className="container mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-6 border mb-8 shadow-sm">
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <img src={user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'} className="w-24 h-24 rounded-full border-4 border-primary" />
//               <div className="flex-1 text-center md:text-left">
//                 <h1 className="font-serif text-2xl font-bold">{user?.name}</h1>
//                 <p className="text-muted-foreground">{user?.email}</p>
//                 <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
//                   <Badge variant="secondary"><Heart className="w-3 h-3 mr-1" /> {likedBackendPlants.length} Liked</Badge>
//                   <Badge variant="secondary"><Bookmark className="w-3 h-3 mr-1" /> {bookmarkedPlants.length} Saved</Badge>
//                   <Badge variant="secondary"><FileText className="w-3 h-3 mr-1" /> {userPosts.length} Posts</Badge>
//                 </div>
//               </div>
//               <Button variant="outline" onClick={handleLogout}><LogOut className="w-4 h-4 mr-2" /> Sign Out</Button>
//             </div>
//           </motion.div>

//           <Tabs defaultValue="liked">
//             <TabsList className="mb-6">
//               <TabsTrigger value="liked">Liked Plants</TabsTrigger>
//               <TabsTrigger value="bookmarked">Saved Plants</TabsTrigger>
//               <TabsTrigger value="posts">My Posts</TabsTrigger>
//             </TabsList>

//             <TabsContent value="liked">
//               {likedBackendPlants.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {likedBackendPlants.map((plant) => (
//                     <PlantCard key={plant.id} plant={plant} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-16 bg-card rounded-xl border border-dashed">
//                   <Heart className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2" />
//                   <p>No liked plants found.</p>
//                 </div>
//               )}
//             </TabsContent>

//             <TabsContent value="bookmarked">
//               {bookmarkedPlants.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {bookmarkedPlants.map((plant) => (
//                     <PlantCard key={plant.id} plant={plant} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-16 bg-card rounded-xl border border-dashed">
//                     <Bookmark className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2" />
//                     <p>No saved plants yet.</p>
//                 </div>
//               )}
//             </TabsContent>

//             <TabsContent value="posts">
//               {/* Post rendering logic remains same */}
//               {userPosts.map((post) => (
//                  <div key={post.id} className="p-4 border rounded-lg mb-4 bg-card">
//                     <h3 className="font-bold">{post.plantName}</h3>
//                     <p className="text-sm">{post.description}</p>
//                  </div>
//               ))}
//             </TabsContent>
//           </Tabs>
//         </div>
//       </main>
//       <AIChatbot />
//     </div>
//   );
// };

// export default ProfilePage;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  User,
  Heart,
  Bookmark,
  FileText,
  LogOut,
  Leaf,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import TopNavbar from '@/components/navigation/TopNavbar';
import BottomNavbar from '@/components/navigation/BottomNavbar';
import PlantCard from '@/components/plants/PlantCard';
import AIChatbot from '@/components/chat/AIChatbot';
import { useApp } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';
import { Plant, PlantCategory } from '@/types';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, login, logout, signup, plants, posts } = useApp();
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedPosts, setSavedPosts] = useState<any[]>([]);
  
  // NEW: Liked plants state
  const [likedBackendPlants, setLikedBackendPlants] = useState<Plant[]>([]);

  // 1. Fetch Saved/Bookmarked posts
  useEffect(() => {
    if (!isAuthenticated) {
      setSavedPosts([]);
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/saved", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSavedPosts(res.data))
      .catch((err) => console.error("Fetch saved failed", err));
  }, [isAuthenticated]);

  // 2. ✅ FIXED: Fetch Liked Plants and Map with Local Data
  useEffect(() => {
    const fetchLikedPlants = async () => {
      if (isAuthenticated && user) {
        // Safe ID check for MongoDB or Local
        const userId = user.id || (user as any)._id;
        
        try {
          const res = await axios.get(`http://localhost:5000/api/liked/user/${userId}`);
          
          // Backend se aayi IDs ko strings mein convert karein
          const likedIds = res.data.map((item: any) => String(item.post));
          
          // Local 'plants' array se match karein taaki poori details mil jayein
          const matchedPlants = plants
            .filter(p => likedIds.includes(String(p.id)))
            .map(p => ({ ...p, isLiked: true })); // Force heart icon to be red

          setLikedBackendPlants(matchedPlants);
        } catch (err) {
          console.error("Error fetching likes:", err);
        }
      } else {
        setLikedBackendPlants([]);
      }
    };

    fetchLikedPlants();
  }, [isAuthenticated, user, plants]); // Added plants to dependency

  // Map saved posts to Plant type safely
  const bookmarkedPlants: Plant[] = savedPosts.map((item) => ({
    id: item.post?._id || "unknown",
    name: item.post?.plantName || "Unknown Plant",
    botanicalName: "Community Contribution",
    description: item.post?.description || "",
    medicinalUse: item.post?.description || "",
    imageUrl: item.post?.imageUrl
      ? `http://localhost:5000/${item.post.imageUrl.replace(/\\/g, "/")}`
      : "/placeholder.png",
    category: "community" as PlantCategory,
    location: { lat: 0, lng: 0, region: "Unknown" },
    ayushSystem: [],
    likes: 0,
    isLiked: false,
    isBookmarked: true,
  }));

  const userPosts = posts.filter((p) => p.userId === (user?.id || (user as any)?._id));

  // Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) return;
    setIsLoading(true);
    try {
      const success = await login(loginData.email, loginData.password);
      if (success) toast({ title: 'Welcome back! 🌿' });
    } catch {
      toast({ title: 'Error', variant: 'destructive' });
    } finally { setIsLoading(false); }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password) return;
    setIsLoading(true);
    try {
      const success = await signup(signupData.name, signupData.email, signupData.password);
      if (success) {
        toast({ title: 'Account created! 🌿' });
        setIsSignup(false);
      }
    } catch {
      toast({ title: 'Error', variant: 'destructive' });
    } finally { setIsLoading(false); }
  };

  const handleLogout = () => {
    logout();
    toast({ title: 'Signed out' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <TopNavbar />
        <BottomNavbar />
        <main className="pt-20 pb-24 md:pb-8">
          <div className="container mx-auto px-6 max-w-md">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-3xl font-bold mb-2">Welcome to AYUSH Garden</h1>
              <p className="text-muted-foreground">{isSignup ? 'Create an account' : 'Sign in to your account'}</p>
            </motion.div>
            <form onSubmit={isSignup ? handleSignup : handleLogin} className="bg-card rounded-2xl p-6 border space-y-4 shadow-sm">
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={isSignup ? signupData.email : loginData.email} onChange={(e) => isSignup ? setSignupData({ ...signupData, email: e.target.value }) : setLoginData({ ...loginData, email: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={isSignup ? signupData.password : loginData.password} onChange={(e) => isSignup ? setSignupData({ ...signupData, password: e.target.value }) : setLoginData({ ...loginData, password: e.target.value })} />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
              <button type="button" className="w-full text-sm text-primary" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />
      <BottomNavbar />
      <main className="pt-20 pb-24 md:pb-8">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-6 border mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'} className="w-24 h-24 rounded-full border-4 border-primary" />
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-serif text-2xl font-bold">{user?.name}</h1>
                <p className="text-muted-foreground">{user?.email}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                  <Badge variant="secondary"><Heart className="w-3 h-3 mr-1" /> {likedBackendPlants.length} Liked</Badge>
                  <Badge variant="secondary"><Bookmark className="w-3 h-3 mr-1" /> {bookmarkedPlants.length} Saved</Badge>
                  <Badge variant="secondary"><FileText className="w-3 h-3 mr-1" /> {userPosts.length} Posts</Badge>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout}><LogOut className="w-4 h-4 mr-2" /> Sign Out</Button>
            </div>
          </motion.div>

          <Tabs defaultValue="liked">
            <TabsList className="mb-6">
              <TabsTrigger value="liked">Liked Plants</TabsTrigger>
              <TabsTrigger value="bookmarked">Saved Plants</TabsTrigger>
              <TabsTrigger value="posts">My Posts</TabsTrigger>
            </TabsList>

            <TabsContent value="liked">
              {likedBackendPlants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {likedBackendPlants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-xl border border-dashed">
                  <Heart className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2" />
                  <p>No liked plants found.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="bookmarked">
              {bookmarkedPlants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {bookmarkedPlants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-xl border border-dashed">
                  <Bookmark className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2" />
                  <p>No saved plants yet.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="posts">
              <div className="grid gap-4">
                {userPosts.map((post) => (
                   <div key={post.id} className="p-4 border rounded-lg bg-card shadow-sm">
                      <h3 className="font-bold text-lg">{post.plantName}</h3>
                      <p className="text-muted-foreground">{post.description}</p>
                   </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <AIChatbot />
    </div>
  );
};

export default ProfilePage;