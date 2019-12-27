/*
 * Authentication Messages
 *
 * This contains all the text for the Authentication container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Authentication';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Authentication container!',
  },
});
