# `HapticFeedback`

Controls the haptic feedback. It allows calling different types of
haptic notifications which usually occur after the user interaction with the
application. There is more information about this component in this 
[documentation](../../../features/haptic-feedback).

## Initialization

```typescript
import {HapticFeedback} from '@twa.js/sdk';
import {Bridge} from '@twa.js/bridge';

const haptic = new HapticFeedback(Bridge.init(), '6.3');
```

## Notifications

`HapticFeedback` supports 3 types of haptic events -
`impactOccurred`, `notificationOccurred` and `selectionChanged`.

### `impactOccurred`

A method tells that an impact occurred. The Telegram app may play the
appropriate haptics based on style value passed. Style of impact occurred haptic
event:

- `light`, indicates a collision between small or lightweight UI objects,
- `medium`, indicates a collision between medium-sized or medium-weight UI
  objects,
- `heavy`, indicates a collision between large or heavyweight UI objects,
- `rigid`, indicates a collision between hard or inflexible UI objects,
- `soft`, indicates a collision between soft or flexible UI objects.

```typescript
haptic.impactOccurred('medium');
```

### `notificationOccurred`

A method tells that a task or action has succeeded, failed, or produced
a warning. The Telegram app may play the appropriate haptics based on
type value passed. Type of notification occurred type event.

- `error`, indicates that a task or action has failed,
- `success`, indicates that a task or action has completed successfully,
- `warning`, indicates that a task or action produced a warning.

```typescript
haptic.notificationOccurred('success');
```

### `selectionChanged`

A method tells that the user has changed a selection. The Telegram app
may play the appropriate haptics.

Do not use this feedback when the user makes or confirms a selection;
use it only when the selection changes.

```typescript title="Example"
haptic.selectionChanged();
```

## Methods support

Methods available for the [support check](../about#methods-support):

- `notificationOccurred`
- `impactOccurred`
- `selectionChanged`