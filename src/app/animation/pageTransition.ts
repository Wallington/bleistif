
/*
* Author: Sean O'Brien
* Create Date: 11/02/2018
* Modify Date: 11/03/2018
* Discription: this animation going to fade each of our pages feature to graphite or to charcoal
*/


import 
{ 
    trigger,
    transition,
    style,
    query,
    animateChild,
    group,
    animate,
    
} from "@angular/animations";


export const PageTranstion = 
trigger('routeAnimations',
[
    transition('* => feature', //* = last page user was on then will go to feature will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => graphite', //* = last page user was on then will go to graphite will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => charcoal', //* = last page user was on then will go to charcoal will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => colored', //* = last page user was on then will go to colored will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => waterColored', //* = last page user was on then will go to waterColored will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => accessory', //* = last page user was on then will go to accessory will transition
    [
        style
        ({
            position: 'relative'
        }),
        query(':enter, :leave',
        [
            style
            ({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style
            ({
                left: '-100%' //starting at left -100%
            })
        ]),
        query(':leave', animateChild()),
        group
        ([
            query(':leave',
            [
                animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style
                ({
                    left: '100%'
                }))
            ]),
            query(':enter',
            [
                animate('300ms cubic-bezier(0.4, 0.0, 1, 1)', style
                ({
                    left: '0%'
                }))
            ])
        ]),
        query(':enter', animateChild()),
    ]),
    transition('* => product', //* = last page user was on then will go to accessory will transition
    [
        
    ]),
]);