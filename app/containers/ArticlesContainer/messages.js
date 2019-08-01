/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: 'Articles',
  delete: {
    title: 'Delete article',
    description: 'Are you sure to delete this article?',
    success: 'Deleted article successfully',
  },
  details: {
    title: {
      title: 'Title',
      placeholder: 'Title of article',
      tips: 'Title is required',
    },
    description: {
      title: 'Description',
      placeholder: 'Description of article',
      tips: 'Description is required',
    },
    body: {
      title: 'Body',
      placeholder: 'Body of article',
      tips: 'Body is required',
    },
  },
});
