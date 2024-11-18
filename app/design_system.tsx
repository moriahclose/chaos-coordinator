import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Calendar,
    CheckCircle,
    ChevronRight,
    Clock,
    Home,
    List,
    Plus,
    Settings,
    Utensils,
} from 'lucide-react'

export default function DesignSystem() {
    return (
        <div className="p-6 bg-[#E8F3EC] min-h-screen font-sans">
            <h1 className="text-4xl font-bold mb-8 text-[#2A6F62]">
                Family Fun Planner
            </h1>

            {/* Color Palette */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#2A6F62]">
                    Color Palette
                </h2>
                <div className="flex space-x-4">
                    <div className="w-20 h-20 bg-[#2A6F62] rounded-md flex items-center justify-center text-white">
                        Primary
                    </div>
                    <div className="w-20 h-20 bg-[#3AAFA9] rounded-md flex items-center justify-center text-white">
                        Secondary
                    </div>
                    <div className="w-20 h-20 bg-[#7BCED1] rounded-md flex items-center justify-center text-[#2A6F62]">
                        Accent
                    </div>
                    <div className="w-20 h-20 bg-[#E8F3EC] rounded-md flex items-center justify-center border border-[#2A6F62] text-[#2A6F62]">
                        Background
                    </div>
                    <div className="w-20 h-20 bg-[#C5E5D0] rounded-md flex items-center justify-center text-[#2A6F62]">
                        Muted
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#2A6F62]">
                    Typography
                </h2>
                <h1 className="text-4xl font-bold mb-2 text-[#2A6F62]">
                    Heading 1
                </h1>
                <h2 className="text-3xl font-semibold mb-2 text-[#3AAFA9]">
                    Heading 2
                </h2>
                <h3 className="text-2xl font-medium mb-2 text-[#7BCED1]">
                    Heading 3
                </h3>
                <p className="text-base mb-2 text-[#2A6F62]">
                    Body text: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
                <p className="text-sm text-[#2A6F62]">
                    Small text: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </section>

            {/* Components */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#2A6F62]">
                    Components
                </h2>
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <Button className="bg-[#3AAFA9] hover:bg-[#7BCED1] text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
                            Add Task
                        </Button>
                        <Button className="bg-[#2A6F62] hover:bg-[#3A8F82] text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105">
                            View Calendar
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#3AAFA9] text-[#3AAFA9] hover:bg-[#3AAFA9] hover:text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
                        >
                            Settings
                        </Button>
                    </div>
                    <Input
                        placeholder="Enter a new task"
                        className="max-w-sm border-[#3AAFA9] bg-white text-[#2A6F62] focus:border-[#7BCED1] focus:ring-[#7BCED1] rounded-full shadow-md"
                    />
                    <Card className="max-w-sm border-[#3AAFA9] bg-white shadow-lg rounded-lg overflow-hidden">
                        <CardHeader className="bg-[#3AAFA9] text-white">
                            <CardTitle>Family To-Do List</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#3AAFA9]" />
                                    <span className="text-[#2A6F62]">
                                        Plan weekend outing
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#3AAFA9]" />
                                    <span className="text-[#2A6F62]">
                                        Grocery shopping
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-[#3AAFA9]" />
                                    <span className="text-[#2A6F62]">
                                        Family game night
                                    </span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Icons */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#2A6F62]">
                    Icons
                </h2>
                <div className="flex space-x-4 text-[#3AAFA9]">
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Home className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <List className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Utensils className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Plus className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <Settings className="w-6 h-6" />
                    </div>
                    <div className="p-2 bg-white rounded-full shadow-md">
                        <ChevronRight className="w-6 h-6" />
                    </div>
                </div>
            </section>
        </div>
    )
}
