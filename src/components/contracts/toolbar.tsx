import { Editor } from '@tiptap/react'
import { Bold, Italic, Strikethrough, List, ListOrdered, Heading2, Heading1, Heading3, Heading4, Heading5, Heading6, Blocks, StopCircle, AlignLeft, AlignRight, AlignCenter } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

type Props = {
    editor : Editor | null 
}

const Toolbar = ({editor} : Props) => {
    if (!editor) {
        return null;
    }

  return (
    <div className='border border-input flex flex-row items-center gap-1 flex-wrap'>
        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 1
                }).run()
            }}
        >
            <Heading1 className='h-4 w-4' />
        </Toggle>
        
        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 2
                }).run()
            }}
        >
            <Heading2 className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 3
                }).run()
            }}
        >
            <Heading3 className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 4
                }).run()
            }}
        >
            <Heading4 className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 5
                }).run()
            }}
        >
            <Heading5 className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("heading")}
            onPressedChange={() => {
                editor.chain().focus().toggleHeading({
                    level : 6
                }).run()
            }}
        >
            <Heading6 className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("bold")}
            onPressedChange={() => {
                editor.chain().focus().toggleBold().run()
            }}
        >
            <Bold className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("italic")}
            onPressedChange={() => {
                editor.chain().focus().toggleItalic().run()
            }}
        >
            <Italic className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("strikethrough")}
            onPressedChange={() => {
                editor.chain().focus().toggleStrike().run()
            }}
        >
            <Strikethrough className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("blockquote")}
            onPressedChange={() => {
                editor.chain().focus().toggleBlockquote().run()
            }}
        >
            <Blocks className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("hardbreak")}
            onPressedChange={() => {
                editor.chain().focus().setHardBreak().run()
            }}
        >
            <StopCircle className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("list")}
            onPressedChange={() => {
                editor.chain().focus().toggleBulletList().run()
            }}
        >
            <List className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive("orderedList")}
            onPressedChange={() => {
                editor.chain().focus().toggleOrderedList().run()
            }}
        >
            <ListOrdered className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive({ textAlign: 'left' })}
            onPressedChange={() => {
                editor.chain().focus().setTextAlign('left').run()
            }}
        >
            <AlignLeft className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive({ textAlign: 'center' })}
            onPressedChange={() => {
                editor.chain().focus().setTextAlign('center').run()
            }}
        >
            <AlignCenter className='h-4 w-4' />
        </Toggle>

        <Toggle
            size={"sm"}
            pressed={editor.isActive({ textAlign: 'right' })}
            onPressedChange={() => {
                editor.chain().focus().setTextAlign('right').run()
            }}
        >
            <AlignRight className='h-4 w-4' />
        </Toggle>
    </div>
  )
}

export default Toolbar