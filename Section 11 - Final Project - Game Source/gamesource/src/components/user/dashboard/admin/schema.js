import * as yup from 'yup';

const ArticleSchema = {
    game: yup.string().required('The game is required!'),
    title: yup.string().required('The title is required!')
            .min(20, 'Make the title bigger!')
            .max(50, 'Make the title shorter!'),
    excerpt: yup.string().required('The game is required!')
            .min(100, 'Make the title bigger!')
            .max(900, 'Make the title shorter!'),
    editor: yup.string().required('Editor is required'),
    rating: yup.string().required('The rating is required!')
            .notOneOf(['Select a rating'], 'You need select a rating'),
    image: yup.string().required('The url image is required or local image!')
    .url('Is this a valid URL?'),
//     image_local: yup.string().required('The image local is required or url image!'),
}

export default ArticleSchema;

// This is for Add.vue component