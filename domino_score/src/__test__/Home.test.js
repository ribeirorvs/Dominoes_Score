import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../../src/pages/Home';

const home = renderer.create(<Home />).toJSON();
const backgroundImage = home.children[0].children[0];
const homeStyle = home.props.style;
const players = home.children[0].children[1].children[0];
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
        expect(homeStyle).not.toBe(undefined);
        expect(homeStyle.flex).toBe(1);
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
        expect(pair1.props.style.borderWidth).toBe(2)
        expect(pair1.props.style.borderRadius).toBe(10)
        expect(pair1.props.style.borderColor).toBe('#000000')
        expect(pair1.props.style.width).toBe(150)
        expect(pair1.props.style.height).toBe(77)
        expect(pair1.props.style.paddingHorizontal).toBe(10)
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
        expect(pair2.props.style.borderWidth).toBe(2)
        expect(pair2.props.style.borderRadius).toBe(10)
        expect(pair2.props.style.borderColor).toBe('#000000')
        expect(pair2.props.style.width).toBe(150)
        expect(pair2.props.style.height).toBe(77)
        expect(pair2.props.style.paddingHorizontal).toBe(10)
        expect(pair2.props.style.backgroundColor).toBe('#ffffff')
    })
})