import { ReactNode } from "react"

export const Card = ({ 
  children,
  className 
}: { 
  children: ReactNode
  className?: string 
}) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
)

export const CardHeader = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
)

export const CardTitle = ({ 
  children,
  className 
}: { 
  children: ReactNode
  className?: string 
}) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
)

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div className="p-6 pt-0">{children}</div>
)