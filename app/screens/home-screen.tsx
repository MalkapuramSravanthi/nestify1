import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function HomeScreen() {
  return (
    <div className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">HopeConnect</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container p-4 space-y-6">
          <section className="space-y-2">
            <h2 className="text-2xl font-bold">Welcome back, Sarah</h2>
            <p className="text-muted-foreground">Make a difference today</p>
          </section>

          <section>
            <div className="bg-primary/10 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold">Impact Summary</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-background rounded-lg p-2">
                  <p className="text-xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Donations</p>
                </div>
                <div className="bg-background rounded-lg p-2">
                  <p className="text-xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Volunteer</p>
                </div>
                <div className="bg-background rounded-lg p-2">
                  <p className="text-xl font-bold">5</p>
                  <p className="text-xs text-muted-foreground">Children</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Urgent Needs</h3>
              <Button variant="link" className="text-primary p-0">
                See all
              </Button>
            </div>
            <div className="space-y-3">
              <Card>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="Food supplies"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Food Supplies</h4>
                        <Badge variant="outline" className="text-xs">
                          Urgent
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Hope Orphanage needs food supplies</p>
                      <div className="mt-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span className="font-medium">65%</span>
                        </div>
                        <Progress value={65} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="School supplies"
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">School Supplies</h4>
                        <Badge variant="outline" className="text-xs">
                          New
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Children need books and stationery</p>
                      <div className="mt-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Recent Success Stories</h3>
              <Button variant="link" className="text-primary p-0">
                See all
              </Button>
            </div>
            <div className="space-y-3">
              <Card>
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Success story" />
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Maya found her forever home</h4>
                      <p className="text-sm text-muted-foreground">
                        After 3 years at Hope Orphanage, Maya was adopted by the Johnson family.
                      </p>
                      <Button variant="link" className="text-primary p-0 h-auto text-xs">
                        Read more
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Success story" />
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Education program success</h4>
                      <p className="text-sm text-muted-foreground">
                        10 children graduated from our special education program with flying colors.
                      </p>
                      <Button variant="link" className="text-primary p-0 h-auto text-xs">
                        Read more
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

