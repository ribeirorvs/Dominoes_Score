import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../../src/pages/Home';

const home = renderer.create(<Home />).toJSON();
const backgroundImage = home.children[0].children[0];
const players = home.children[0].children[1].children[0];
const scores = home.children[0].children[1].children[1];
const scorePair1 = scores.children[0];
const pair1 = players.children[0];
const pair1Player1 = pair1.children[0];
const pair1VerticalLine = pair1.children[1];
const pair1Player2 = pair1.children[2];
const pair2 = players.children[1];
const pair2Player1 = pair2.children[0];
const pair2VerticalLine = pair2.children[1];
const pair2Player2 = pair2.children[2];

//console.log(players);

// Test if the home.tsx is created
describe('Check if home view exist', () => {
    it('has 1 container view', () => {
        expect(home.type).toBe('View');
    })
    it('Check the home view style', () => {
        expect(home.props.style).not.toBe(undefined);
        expect(home.props.style.flex).toBe(1);
    })
    it('Check the background image of the page', () => {
        expect(backgroundImage.type).toBe('Image')
        expect(backgroundImage.props.style).not.toBe(undefined)
        expect(home.children[0].props.style.flex).toBe(1)
        expect(home.children[0].props.style.width).toBe('100%')
    })
})

//Test the players view, the second element in the home page
describe('Check players view', () => {
    it('The home has a view child to players as the first child', () => {
        expect(players.type).toBe('View');
    })
    it('The players view must have two other views, each for one player pair', () => {
        expect(players.children.length).toBe(2);
    })
    it('Check the players view style', () => {
        expect(players.props.style).not.toBe(undefined)
        expect(players.props.style.width).toBe('100%')
        expect(players.props.style.height).toBe(85)
        expect(players.props.style.paddingHorizontal).toBe(20)
        expect(players.props.style.flexDirection).toBe('row')
        expect(players.props.style.justifyContent).toBe('space-between')
        expect(players.props.style.marginTop).toBe(85)
    })
})

//Test the pair1 view, the first element in the players view
describe('Check the pair1 view', () => {
    it('Each player pair must be a view', () => {
        expect(pair1.type).toBe('View');
    })
    it('Pair1 view must have 2 texts and with a vertical line separator', () => {
        expect(pair1.children.length).toBe(3);
    })
    it('Check the pair1 children types', () => {
        expect(pair1Player1.type).toBe('Text');
        expect(pair1VerticalLine.type).toBe('View');
        expect(pair1Player2.type).toBe('Text');
    })
    it('Check the pair1 styles', () => {
        expect(pair1.props.style).not.toBe(undefined)
        expect(pair1.props.style.flexDirection).toBe('row')
        expect(pair1.props.style.borderWidth).toBe(3)
        expect(pair1.props.style.borderRadius).toBe(10)
        expect(pair1.props.style.borderColor).toBe('#000000')
        expect(pair1.props.style.width).toBe(160)
        expect(pair1.props.style.height).toBe(77)
        expect(pair1.props.style.paddingHorizontal).toBe(15)
        expect(pair1.props.style.backgroundColor).toBe('#ffffff')
    })
})

//Test the pair1 view styles

//Test the pair2 view, the second element in the players view
describe('Check the pair2 view', () => {
    it('Each player pair must be a view', () => {
        expect(pair2.type).toBe('View');
    })
    it('Pair2 view must have 2 texts and with a vertical line separator', () => {
        expect(pair2.children.length).toBe(3);
    })
    it('Check the pair2 children types', () => {
        expect(pair2Player1.type).toBe('Text');
        expect(pair2VerticalLine.type).toBe('View');
        expect(pair2Player2.type).toBe('Text');
    })
    it('Check the pair2 styles', () => {
        expect(pair2.props.style).not.toBe(undefined)
        expect(pair2.props.style.flexDirection).toBe('row')
        expect(pair2.props.style.borderWidth).toBe(3)
        expect(pair2.props.style.borderRadius).toBe(10)
        expect(pair2.props.style.borderColor).toBe('#000000')
        expect(pair2.props.style.width).toBe(160)
        expect(pair2.props.style.height).toBe(77)
        expect(pair2.props.style.paddingHorizontal).toBe(15)
        expect(pair2.props.style.backgroundColor).toBe('#ffffff')
        expect(pair2.props.style.justifyContent).toBe('space-between')
        expect(pair2.props.style.alignItems).toBe('center')
    })
})

//Test pair player 1 styles
describe('Check the pair 1 player 1 text', () => {
    it('Check pair 1 player 1 styles', () => {
        expect(pair1Player1.props.style.fontSize).toBe(14)
    })
})

//Test score view
describe('Check scores view', () => {
    it('Check if the score view existe in the home', () => {
        expect(scores.type).toBe('View')
    })
    it('Check if the scores view must have two other views, each for one player pair score', () => {
        expect(scores.children.length).toBe(2);
    })
    it('Check the scores view style', () => {
        expect(scores.props.style).not.toBe(undefined)
        expect(scores.props.style.width).toBe('100%')
        expect(scores.props.style.height).toBe(90)
        expect(scores.props.style.paddingHorizontal).toBe(40)
        expect(scores.props.style.flexDirection).toBe('row')
        expect(scores.props.style.justifyContent).toBe('space-between')
        expect(scores.props.style.marginTop).toBe(43)
    })
})

//Test the pair 1 score
describe('Check the pair 1 score view', () => {
    it('Check if the pair 1 score view existe', () => {
        expect(scorePair1.type).toBe('View')
    })
    it('Check if all elements is present in the pair 1 score view', () => {
        //The score must have 7 children
        expect(scorePair1.children.length).toBe(7)

    })
})