"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/*  
  ShadCN UI splits the dialog into many small components
  so you can customize each part separately.

  This is the same structure Radix UI uses:
  - Dialog   (the main wrapper / root)
  - DialogTrigger  (button that opens dialog)
  - DialogOverlay  (background blur)
  - DialogContent  (modal box inside)
  - DialogClose    (button to close)
  - DialogHeader   (title section)
  - DialogFooter   (footer section)
  - DialogTitle    (text title)
  - DialogDescription (sub text)
  - DialogPortal   (teleports modal outside DOM for accessibility)
*/

/* -------------------------------
   1. MAIN DIALOG WRAPPER
--------------------------------*/
function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/* -------------------------------
   2. BUTTON THAT OPENS THE DIALOG
--------------------------------*/
function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/* -------------------------------
   3. PORTAL (MODAL ROOT TELEPORT)
   This moves dialog outside the page DOM
   to avoid layout and accessibility issues.
--------------------------------*/
function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/* -------------------------------
   4. CLOSE BUTTON WRAPPER
--------------------------------*/
function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/* -------------------------------
   5. OVERLAY (DARK BACKGROUND)
   The dim black background behind the modal.
--------------------------------*/
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        // fade animations + black background
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/* -------------------------------
   6. CONTENT (THE REAL MODAL BOX)
--------------------------------*/
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      {/* OVERLAY */}
      <DialogOverlay />

      {/* MODAL BOX */}
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          `
          bg-background 
          data-[state=open]:animate-in 
          data-[state=closed]:animate-out 
          data-[state=closed]:fade-out-0 
          data-[state=open]:fade-in-0 
          data-[state=closed]:zoom-out-95 
          data-[state=open]:zoom-in-95 

          fixed top-[50%] left-[50%] 
          translate-x-[-50%] translate-y-[-50%] 
          z-50 grid w-full 
          max-w-[calc(100%-2rem)] sm:max-w-lg

          gap-4 p-6 rounded-lg border shadow-lg duration-200
          `,
          className
        )}
        {...props}
      >
        {children}

        {/* OPTIONAL CLOSE BUTTON */}
        {showCloseButton && (
          <DialogPrimitive.Close
            className="
              absolute top-4 right-4 
              rounded-xs opacity-70 hover:opacity-100 
              transition-opacity
              focus:ring-2 focus:ring-offset-2 
              [&_svg]:size-4
            "
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/* -------------------------------
   7. HEADER SECTION
--------------------------------*/
function DialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/* -------------------------------
   8. FOOTER SECTION
--------------------------------*/
function DialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

/* -------------------------------
   9. TITLE (INSIDE HEADER)
--------------------------------*/
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  )
}

/* -------------------------------
   10. DESCRIPTION (SUBTEXT)
--------------------------------*/
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

/* EXPORT ALL PARTS */
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
}
