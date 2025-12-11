"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Want_Request from "./Want_Requst";



export default function DialogButton() {
  return (
    <div className="p-10 flex items-center justify-center">
      {/* Button that opens the dialog */}
      <Dialog>

        <DialogTrigger className="px-4 py-2 bg-gray-800 cursor-pointer text-white rounded-sm">

          I want Request Form

        </DialogTrigger>

        {/* The dialog box */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Form</DialogTitle>
          </DialogHeader>

          <Want_Request />

        </DialogContent>


      </Dialog>
    </div>
  );
}
