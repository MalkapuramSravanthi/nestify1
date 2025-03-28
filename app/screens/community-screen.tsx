import { Calendar, Clock, Filter, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CommunityScreen() {
  return (
    <div className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container p-4">
          <h1 className="text-xl font-bold">Community</h1>
          <p className="text-sm text-muted-foreground">Volunteer opportunities and events</p>
        </div>
      </header>
      <div className="container p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events, opportunities..." className="pl-9 pr-4" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="volunteer" className="mb-4">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteer" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Teaching volunteer"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Teaching Assistant</h3>
                      <Badge>Weekly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Help children with homework and reading skills</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Hope Orphanage</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Every Tuesday</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>3:00 PM - 5:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm" className="h-8">
                      Apply now
                    </Button>
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
                      alt="Sports volunteer"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Sports Coach</h3>
                      <Badge>Weekend</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Teach children sports and organize games</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>Sunshine Children's Home</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Saturdays</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm" className="h-8">
                      Apply now
                    </Button>
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
                      alt="Cooking volunteer"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Kitchen Helper</h3>
                      <Badge>Monthly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Help prepare nutritious meals for children</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>New Life Orphanage</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>First Sunday of month</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                    <Button size="sm" className="h-8">
                      Apply now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="mt-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Fundraising event"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Annual Fundraising Gala</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Join us for an evening of giving and entertainment
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>June 15, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>7:00 PM - 10:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>Grand Hotel</span>
                        </div>
                      </div>
                      <Button size="sm" className="h-8">
                        Register
                      </Button>
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
                        alt="Children's day event"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Children's Day Celebration</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        A day of fun activities for orphaned children
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>November 20, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>City Park</span>
                        </div>
                      </div>
                      <Button size="sm" className="h-8">
                        Volunteer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-4">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Understanding Adoption</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Learn about the legal and emotional aspects of adoption
                  </p>
                  <Button size="sm" className="h-8">
                    Read article
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Supporting Orphaned Children</h3>
                  <p className="text-sm text-muted-foreground mb-2">Best practices for emotional support and care</p>
                  <Button size="sm" className="h-8">
                    Watch video
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Orphan Crisis: Global Perspective</h3>
                  <p className="text-sm text-muted-foreground mb-2">Understanding the challenges and solutions</p>
                  <Button size="sm" className="h-8">
                    Read article
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-6">
          <h3 className="font-semibold mb-3">Community Heroes</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <div className="flex flex-col items-center min-w-[80px]">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Volunteer" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium mt-1">John D.</span>
              <span className="text-xs text-muted-foreground">50+ hours</span>
            </div>

            <div className="flex flex-col items-center min-w-[80px]">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Volunteer" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium mt-1">Sarah M.</span>
              <span className="text-xs text-muted-foreground">42 hours</span>
            </div>

            <div className="flex flex-col items-center min-w-[80px]">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Volunteer" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium mt-1">Raj K.</span>
              <span className="text-xs text-muted-foreground">38 hours</span>
            </div>

            <div className="flex flex-col items-center min-w-[80px]">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Volunteer" />
                <AvatarFallback>LW</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium mt-1">Lisa W.</span>
              <span className="text-xs text-muted-foreground">35 hours</span>
            </div>

            <div className="flex flex-col items-center min-w-[80px]">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Volunteer" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium mt-1">Mike J.</span>
              <span className="text-xs text-muted-foreground">30 hours</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

