import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { toast } from '@/hooks/use-toast'
import { AppErr } from '@/utils/app-err'
import { Loader, Trash } from 'lucide-react'
import { useState } from 'react'

const DeleteTemplate = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [loading, isLoading] = useState<boolean>(false);
    async function HandleDeleteContract() {
        try {
            isLoading(true);
            
            toast({
                title : "Success",
                description : "the template has been deleted successfully",
                variant : "default"
            });
        } catch (error) {
            AppErr(error);
        } finally {
            isLoading(false);
            setOpen(false);
        }
    }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            <Button variant={"destructive"} size={"sm"}>
            <Trash />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Delete Template
                </DrawerTitle>
                <DrawerDescription>
                    Are you sure you want to delete this contract
                </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className='flex flex-row w-full items-center gap-3 justify-end'>
                <DialogClose asChild>
                    <Button variant={"outline"} size={"sm"}>
                        Close
                    </Button>
                </DialogClose>
                <Button onClick={HandleDeleteContract} variant={"destructive"} size={"sm"}>
                    {loading ? <>
                        <Loader className='h-4 w-4 animate-spin mr-1' />
                        Deleting
                    </> : <>
                        <Trash className='mr-1 h-4 w-4' />
                        Delete Contract
                    </>}
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default DeleteTemplate