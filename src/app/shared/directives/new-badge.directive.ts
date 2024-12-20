import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appNewBadge]',
  standalone: true,
})
export class NewBadgeDirective implements OnInit {
  @Input() public appNewBadge: string | undefined;

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  public ngOnInit(): void {
    if (this.isNew(this.appNewBadge)) {
      const badge = this.renderer.createElement('span');
      this.renderer.setProperty(badge, 'innerText', 'Nouveau');
      this.renderer.setStyle(badge, 'backgroundColor', '#3f51b5');
      this.renderer.setStyle(badge, 'color', 'white');
      this.renderer.setStyle(badge, 'padding', '5px 10px');
      this.renderer.setStyle(badge, 'borderRadius', '12px');
      this.renderer.setStyle(badge, 'fontSize', '0.75rem');
      this.renderer.setStyle(badge, 'height', '30px');
      this.renderer.appendChild(this.el.nativeElement, badge);
    }
  }

  private daysOffset = 7;

  private isNew(dateString: string | undefined): boolean {
    if (!dateString) return false;

    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= this.daysOffset;
  }
}
