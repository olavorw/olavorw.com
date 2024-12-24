// animationController.ts
class AnimationController {
  private _animationsEnabled = true;

  get animationsEnabled() {
    return this._animationsEnabled;
  }

  toggleAnimations() {
    this._animationsEnabled = !this._animationsEnabled;
  }
}

export const animationController = new AnimationController();
