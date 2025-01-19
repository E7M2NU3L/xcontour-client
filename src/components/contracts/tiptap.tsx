import StarterKit from '@tiptap/starter-kit';
import {useEditor, EditorContent} from '@tiptap/react';
import Toolbar from './toolbar';
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import BlockQuote from '@tiptap/extension-blockquote';
import OrderedList from '@tiptap/extension-ordered-list';
import Hardbreak from '@tiptap/extension-hard-break';
import TextAlign from '@tiptap/extension-text-align';

const TipTap = ({contract, onChange} : {
    contract : string;
    onChange : (value : string) => void;
}) => {
    const editor = useEditor({
        extensions : [StarterKit.configure({
            
        }),
        Document,
        Paragraph,
        Text,
        Bold,
        Italic,
        BlockQuote,
        OrderedList.configure({
            HTMLAttributes : {
                class : "list-decimal pl-3"
            }
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Hardbreak,
        BulletList.configure({
            itemTypeName: 'listItem',
            HTMLAttributes : {
                class : "list-disc pl-3"
            },
            keepMarks : true,
            keepAttributes : true
        }), ListItem,
        Heading.configure({
            levels : [1,2,3,4,5,6],
        })],
        content : contract,
        editorProps : {
            attributes : {
                class : "rounded-md border p-6 border-input bg-background min-h-[50vh]"
            }
        },
        onUpdate({editor}) {
            onChange(editor.getHTML()),
            console.log(editor.getHTML())        
        }
    })
  return (
    <div className='flex flex-col gap-2'>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
    </div>
  )
}

export default TipTap