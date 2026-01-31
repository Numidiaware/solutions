// Fix: Import React to resolve the 'React' namespace error for ReactNode.
import React from 'react';

export interface Product {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    path: string;
}

export interface NavItem {
    label: string;
    path: string;
    children?: NavItem[];
}

export interface DocSection {
    id: string;
    title: string;
}