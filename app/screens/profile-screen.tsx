import { Bell, ChevronRight, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ProfileScreen() {
  return (
    <div className="flex flex-col h-full pb-16">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container p-4">
          <h1 className="text-xl font-bold">Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your account</p>
        </div>
      </header>
      <div className="container p-4 space-y-6">
        <section className="flex items-center gap-4">
          <Avatar className="w-20 h-20 border">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile picture" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Sarah Johnson</h2>
            <p className="text-sm text-muted-foreground">sarah.johnson@example.com</p>
            <Badge variant="outline" className="mt-1">
              Verified Donor
            </Badge>
          </div>
        </section>

        <section>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Your Impact</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Donations</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Volunteer Hours</span>
                    <span className="font-medium">24 hours</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Children Supported</span>
                    <span className="font-medium">5 children</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3">
                View detailed impact
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <h3 className="font-semibold">Account Settings</h3>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Personal Information</p>
                      <p className="text-xs text-muted-foreground">Update your personal details</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Notifications</p>
                      <p className="text-xs text-muted-foreground">Manage notification preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Privacy & Security</p>
                      <p className="text-xs text-muted-foreground">Manage your privacy settings</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <h3 className="font-semibold">Preferences</h3>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">Receive notifications about updates</p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-updates">Email Updates</Label>
                  <p className="text-xs text-muted-foreground">Receive email newsletters</p>
                </div>
                <Switch id="email-updates" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </section>

        <Button variant="outline" className="w-full flex items-center gap-2 text-destructive">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          HopeConnect v1.0.0 • Terms of Service • Privacy Policy
        </p>
      </div>
    </div>
  )
}

