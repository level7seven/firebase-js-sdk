/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  registerVersion
} from '@firebase/app-exp';
import { _FirebaseAppInternal } from '@firebase/app-types-exp';
import { _FirebaseNamespace } from '@firebase/app-types/private';
import { registerFunctions } from './config';
import 'isomorphic-fetch';

import { name, version } from '../package.json';

export * from './api';

registerFunctions();
registerVersion(name, version, 'node');