<template>
    <div class="awesome_editor">
        <div v-if="editor" class="btn_container">
            <!-- Bolt -->
            <span
                @click="editor.chain().focus().toggleBold().run()"
                :class="{'is-active': editor.isActive('bolt')}"
            >
                Bolt
            </span>
            <!-- Italic  -->
            <span
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{'is-active': editor.isActive('italic')}"
            >
                Italic
            </span>
            <!-- H! -->
            <span
                @click="editor.chain().focus().toggleHeading({level: 1}).run()"
                :class="{'is-active': editor.isActive('heading', {level: 1})}"
            >
                H!
            </span>
            <!-- H2 -->
            <span
                @click="editor.chain().focus().toggleHeading({level: 2}).run()"
                :class="{'is-active': editor.isActive('heading', {level: 2})}"
            >
                H2
            </span>
            <!-- Bullet list -->
             <span
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{'is-active': editor.isActive('bulletList')}"
            >
                Bullet List
            </span>

        </div>
        <EditorContent :editor="editor"></EditorContent>
    </div>
</template>

<script setup>
    import { Editor, EditorContent } from '@tiptap/vue-3';
    import StarterKit from '@tiptap/starter-kit';
    import { watch } from 'vue';

    const emit = defineEmits(['update']);
    const props = defineProps(['content']); // Efit (1)

    const editor = new Editor({
        content: '',
        extensions: [StarterKit],
        onUpdate: ()=>{
            emit('update', editor.getHTML());
        }
    });

    watch(()=>props.content, ()=> { // (3) 
        LoadContent();
    })

    function LoadContent() { // (2)
        if(props.content) {
            editor.commands.setContent(props.content);
        }
    }

 LoadContent(); // 3
</script>