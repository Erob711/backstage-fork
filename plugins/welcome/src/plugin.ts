/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  createPlugin,
  createRoutableExtension,
  createRouteRef,
} from '@backstage/core';
import WelcomePageComponent from './components/WelcomePage';

export const rootRouteRef = createRouteRef({
  title: 'Welcome',
});

export const welcomePlugin = createPlugin({
  id: 'welcome',
  register({ router, featureFlags }) {
    router.addRoute(rootRouteRef, WelcomePageComponent);
    featureFlags.register('enable-welcome-box');
  },
});

export const WelcomePage = welcomePlugin.provide(
  createRoutableExtension({
    component: () => import('./components/WelcomePage').then(m => m.default),
    mountPoint: rootRouteRef,
  }),
);
