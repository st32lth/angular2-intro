System.register(['angular2/core', 'angular2/platform/browser', './pixel.pipe', './round.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, pixel_pipe_1, round_pipe_1;
    var StarterTemplate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (pixel_pipe_1_1) {
                pixel_pipe_1 = pixel_pipe_1_1;
            },
            function (round_pipe_1_1) {
                round_pipe_1 = round_pipe_1_1;
            }],
        execute: function() {
            /**
             * Define the Component.
             */
            StarterTemplate = (function () {
                function StarterTemplate() {
                    this.name = 'Starter Template!!';
                }
                StarterTemplate = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/app.tpl.html',
                        pipes: [pixel_pipe_1.PixelPipe, round_pipe_1.RoundPipe] // <- registering the pipe
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarterTemplate);
                return StarterTemplate;
            })();
            /**
             * Bootstrap the app with `StarterTemplate`.
             */
            browser_1.bootstrap(StarterTemplate, []);
        }
    }
});
//# sourceMappingURL=main.js.map