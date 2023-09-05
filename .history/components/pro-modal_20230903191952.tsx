"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

export const ProModal = () => {
    const proModal = useProModal();

    return(
        <Dialog open={proModal.isOPen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify center items-center flex-col gap-y-4 pb-2">
                        Upgrade To NeoSynth
                        <Badge>
                            pro
                        </Badge>
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}