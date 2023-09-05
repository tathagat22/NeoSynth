"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOPen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade To NeoSynth
              <Badge className="uppercase text-sm py-1">pro</Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
