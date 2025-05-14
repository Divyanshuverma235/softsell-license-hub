
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="recipe-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
