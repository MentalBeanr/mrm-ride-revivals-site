export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MRM Ride Revivals. All rights reserved.</p>
        <p>Reviving Rides, One Detail at a Time.</p>
      </div>
    </footer>
  )
}
