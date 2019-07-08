// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineWriters} from 'realm-react-redux';

import channel from './channel';
import general from './general';
import role from './role';
import team from './team';
import user from './user';

export default combineWriters([
    channel,
    general,
    role,
    team,
    user,
]);