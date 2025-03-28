import { Filter, Heart, Info, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AdoptionScreen() {
  return (
    <div className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Adoption Center</h1>
              <p className="text-sm text-muted-foreground">Find a child to welcome into your family</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">
                    All adoption processes follow strict legal and ethical guidelines to ensure child safety and
                    wellbeing.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
      <div className="container p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by age, location..." className="pl-9 pr-4" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="toddler">Toddler</TabsTrigger>
            <TabsTrigger value="child">Child</TabsTrigger>
            <TabsTrigger value="teen">Teen</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-2 gap-3">
          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Child profile"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-background/50 backdrop-blur-sm">Age 5</Badge>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium">Aisha</h3>
              <p className="text-xs text-muted-foreground">Loves drawing and storytelling</p>
              <Button variant="link" className="text-primary p-0 h-auto text-xs mt-1">
                View profile
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Child profile"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-background/50 backdrop-blur-sm">Age 7</Badge>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium">Michael</h3>
              <p className="text-xs text-muted-foreground">Energetic and loves sports</p>
              <Button variant="link" className="text-primary p-0 h-auto text-xs mt-1">
                View profile
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Child profile"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-background/50 backdrop-blur-sm">Age 3</Badge>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium">Sophia</h3>
              <p className="text-xs text-muted-foreground">Sweet and loves music</p>
              <Button variant="link" className="text-primary p-0 h-auto text-xs mt-1">
                View profile
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-40 bg-muted">
              <img
                src="/placeholder.svg?height=160&width=160"
                alt="Child profile"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute bottom-2 left-2 bg-background/50 backdrop-blur-sm">Age 10</Badge>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium">David</h3>
              <p className="text-xs text-muted-foreground">Curious and loves reading</p>
              <Button variant="link" className="text-primary p-0 h-auto text-xs mt-1">
                View profile
              </Button>
            </CardContent>
          </Card>

          <div className="col-span-2 mt-2">
            <Button variant="outline" className="w-full">
              Load more children
            </Button>
          </div>

          <div className="col-span-2 mt-4 p-4 bg-primary/10 rounded-lg">
            <h3 className="font-semibold mb-2">Adoption Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Create and complete your family profile</li>
              <li>Undergo background verification and home study</li>
              <li>Browse and connect with children</li>
              <li>Begin supervised visits and bonding</li>
              <li>Complete legal adoption procedures</li>
              <li>Receive post-adoption support</li>
            </ol>
            <Button className="w-full mt-3">Start Adoption Journey</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

