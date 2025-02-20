import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export function OTPModal({ open, email }: { open: boolean; email: string }) {
  return (
    <Dialog defaultOpen={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Nous avons envoyé un code à {email}
          </DialogDescription>
        </DialogHeader>

        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <DialogFooter>
          <Button type="submit">Soumettre</Button>
        </DialogFooter>

        <DialogDescription>
          Vous n&apos;avez pas reçu de code?{" "}
          <Link href="#" className="text-[#00BF46] font-bold">
            Cliquez ré-envoyer.
          </Link>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
