import { ArrowRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function DonationScreen() {
  return (
    <div className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container p-4">
          <h1 className="text-xl font-bold">Donation Center</h1>
          <p className="text-sm text-muted-foreground">Support children in need</p>
        </div>
      </header>
      <div className="container p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search donations..." className="pl-9 pr-4" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="money">Money</TabsTrigger>
            <TabsTrigger value="goods">Goods</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Food donation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Food Supplies</h3>
                    <Badge variant="outline" className="text-xs">
                      Urgent
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Hope Orphanage needs nutritious food for 50 children
                  </p>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>$3,250 raised of $5,000</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-1.5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">23 days left</span>
                    <Button size="sm" className="h-8">
                      Donate now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Education donation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">School Supplies</h3>
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Books, stationery and uniforms for the new school year
                  </p>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>$1,250 raised of $5,000</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Progress value={25} className="h-1.5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">45 days left</span>
                    <Button size="sm" className="h-8">
                      Donate now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Clothing donation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Winter Clothing</h3>
                    <Badge variant="outline" className="text-xs">
                      Seasonal
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Warm clothes for children during winter months</p>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>$2,800 raised of $4,000</span>
                      <span className="font-medium">70%</span>
                    </div>
                    <Progress value={70} className="h-1.5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">15 days left</span>
                    <Button size="sm" className="h-8">
                      Donate now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Healthcare donation"
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">Healthcare Fund</h3>
                    <Badge variant="outline" className="text-xs">
                      Ongoing
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Medical checkups and treatments for children</p>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>$8,500 raised of $10,000</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-1.5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">30 days left</span>
                    <Button size="sm" className="h-8">
                      Donate now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

