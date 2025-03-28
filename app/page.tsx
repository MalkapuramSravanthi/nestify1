import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HomeScreen } from "./screens/home-screen"
import { DonationScreen } from "./screens/donation-screen"
import { AdoptionScreen } from "./screens/adoption-screen"
import { CommunityScreen } from "./screens/community-screen"
import { ProfileScreen } from "./screens/profile-screen"

export default function OrphanSupportApp() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 overflow-auto">
        <Tabs defaultValue="home" className="h-full">
          <TabsContent value="home" className="h-full p-0 m-0">
            <HomeScreen />
          </TabsContent>
          <TabsContent value="donate" className="h-full p-0 m-0">
            <DonationScreen />
          </TabsContent>
          <TabsContent value="adopt" className="h-full p-0 m-0">
            <AdoptionScreen />
          </TabsContent>
          <TabsContent value="community" className="h-full p-0 m-0">
            <CommunityScreen />
          </TabsContent>
          <TabsContent value="profile" className="h-full p-0 m-0">
            <ProfileScreen />
          </TabsContent>
          <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
            <TabsList className="w-full h-16 grid grid-cols-5">
              <TabsTrigger
                value="home"
                className="flex flex-col items-center justify-center data-[state=active]:text-primary"
              >
                <HomeIcon className="h-5 w-5" />
                <span className="text-xs mt-1">Home</span>
              </TabsTrigger>
              <TabsTrigger
                value="donate"
                className="flex flex-col items-center justify-center data-[state=active]:text-primary"
              >
                <HeartHandshakeIcon className="h-5 w-5" />
                <span className="text-xs mt-1">Donate</span>
              </TabsTrigger>
              <TabsTrigger
                value="adopt"
                className="flex flex-col items-center justify-center data-[state=active]:text-primary"
              >
                <UsersIcon className="h-5 w-5" />
                <span className="text-xs mt-1">Adopt</span>
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="flex flex-col items-center justify-center data-[state=active]:text-primary"
              >
                <UsersRoundIcon className="h-5 w-5" />
                <span className="text-xs mt-1">Community</span>
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="flex flex-col items-center justify-center data-[state=active]:text-primary"
              >
                <UserIcon className="h-5 w-5" />
                <span className="text-xs mt-1">Profile</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </main>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function HeartHandshakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function UsersRoundIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

