import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { 
    Bold, 
    Italic, 
    List, 
    ListOrdered, 
    Heading1, 
    Heading2, 
    Quote, 
    Undo, 
    Redo 
} from 'lucide-react';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const buttons = [
        {
            icon: <Bold className="w-4 h-4" />,
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: editor.isActive('bold'),
        },
        {
            icon: <Italic className="w-4 h-4" />,
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: editor.isActive('italic'),
        },
        {
            icon: <Heading1 className="w-4 h-4" />,
            title: 'H1',
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: editor.isActive('heading', { level: 1 }),
        },
        {
            icon: <Heading2 className="w-4 h-4" />,
            title: 'H2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <List className="w-4 h-4" />,
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: editor.isActive('bulletList'),
        },
        {
            icon: <ListOrdered className="w-4 h-4" />,
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: editor.isActive('orderedList'),
        },
        {
            icon: <Quote className="w-4 h-4" />,
            title: 'Blockquote',
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: editor.isActive('blockquote'),
        },
        {
            icon: <Undo className="w-4 h-4" />,
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            isActive: false,
        },
        {
            icon: <Redo className="w-4 h-4" />,
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            isActive: false,
        },
    ];

    return (
        <div className="flex flex-wrap gap-1 p-2 mb-2 bg-gray-50 border-b border-gray-200 rounded-t-xl">
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        btn.action();
                    }}
                    className={`p-2 rounded-lg transition-all ${
                        btn.isActive 
                            ? 'bg-edufa-blue text-white' 
                            : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title={btn.title}
                >
                    {btn.icon}
                </button>
            ))}
        </div>
    );
};

export default function RichTextEditor({ value, onChange }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[200px] p-4',
            },
        },
    });

    // Update content when value prop changes externally (e.g. on Edit)
    React.useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    return (
        <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:ring-2 focus-within:ring-edufa-blue transition-all">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
