[![npm version](https://badge.fury.io/js/dashboard-widgets.svg)](https://badge.fury.io/js/dashboard-widgets)
![npm bundle size](https://img.shields.io/bundlephobia/min/dashboard-widgets)

# Features
- Badges
- Phone Element
- Dark Mode Detect

## Badges
![Badge1](https://i.imgur.com/hqXI6Yb.png)
This can be done with:

    import {Badge} from "dashboard-widgets"
    <Badge number={2} subtitle="Score" stroke="red" />

Similarly, you can have a filled badge like the following:

![Badge2](https://i.imgur.com/SXSSkyp.png)

    import {Badge} from "dashboard-widgets"
    <Badge number={102} subtitle="Score" stroke="#a0f0a0" type="fill" />

## Phone Element

You can add elements within a phone screen like this:
![Phone1](https://i.imgur.com/cWaZ2X4.png)

The code here is simple:

    import {Phone} from 'dashboard-widgets'
    <Phone>
	    //Your content here
	</Phone>

You can create a smaller and more minimalist phone by passing a truthy value to the `small` prop:

![Phone 2](https://i.imgur.com/5tNaTeh.png)

    import {Phone} from 'dashboard-widgets'
    <Phone small={true}>
    	//Your content here
    </Phone>

## Dark Mode Detect

It is quite easy to detect that the client prefers dark/night mode from CSS. It can be cumbersome to do the same from Javascript. With this package, its as easy as pie:

    import { isDarkMode } from "dashboard-widgets"
    if(isDarkMode){
	    //Code
	}

# Contribution
If you're feeling generous, feel free to put in a PR. This is all under the MIT License.

---
![Logo](https://raw.githubusercontent.com/Benny121221/images/master/logo_full.png)

# Made by Where 1
