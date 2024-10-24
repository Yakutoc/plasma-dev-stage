import React, { FC } from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [{ label: 'Joy' }, { label: 'Sber' }, { label: 'Athena' }];

describe('plasma-web: Tabs', () => {
    const Tabs = getComponent('Tabs');
    const TabItem = getComponent('TabItem');
    const withAutoFocus = getComponent('withAutoFocus');
    const AutoFocusTabItem = withAutoFocus(TabItem);

    const CypressTestDecoratorWithTypo: FC = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('item autoFocus', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs>
                    {items.map((item, i) => (
                        <AutoFocusTabItem key={i} selected={i === 1} autoFocus={i === 1}>
                            {item.label}
                        </AutoFocusTabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('div > button:nth-child(2)').focus();
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="l" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="l" view="divider" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
                <PadMe />
                <Tabs size="l" orientation="vertical" view="divider" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem
                            size="l"
                            orientation="vertical"
                            view="divider"
                            key={i}
                            selected={i === 1}
                            forwardedAs="li"
                        >
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_header', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="h5" view="clear" forwardedAs="ul">
                    {items.map((item, i) => (
                        <TabItem size="h5" view="clear" key={i} selected={i === 1} forwardedAs="li">
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('Clicking on arrows scrolls to previous or next tab', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Tabs size="m" style={{ width: '10.5rem' }}>
                    {items.map((item, i) => (
                        <TabItem pilled key={i} selected={i === 1}>
                            {item.label}
                        </TabItem>
                    ))}
                </Tabs>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Athena').should('not.be.visible');
        cy.get('[aria-label="Следующий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Athena').should('be.visible');

        cy.get('[aria-label="Предыдущий таб"]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('button').contains('Sber').should('be.visible');
        cy.get('button').contains('Joy').should('not.be.visible');
    });
});
