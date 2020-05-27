[![npm version](https://badge.fury.io/js/dashboard-widgets.svg)](https://badge.fury.io/js/dashboard-widgets)
![npm bundle size](https://img.shields.io/bundlephobia/min/dashboard-widgets)


# Installation
`$ npm i dashboard-widgets`

Then simply import the modules you want:

`import {Badge} from dashboard-widgets`

The details of how to use each module are below

# Features
- Auto-apply formatting to tables
- Badges
- Phone Element
- Dark Mode Detect

## Tables

Use `import { FormatTableRows } from "dashboard-widgets"`

Pass in data and a function to act as a formatRule. The `formatRule` prop takes in a cell and returns a classname as a string. `formatRuleRow` does the same thing but for a table row (represented as an array of cells).

```tsx
<table className="table bigText">
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
    <th>Column 3</th>
  </tr>
  <FormatTableRows data={[
      ["1", "a", 1.0],
      [2, "b", 2.0]
    ]}
    formatRule={(cell) => typeof cell == "number" ? "displayRed" : ""}
    formatRuleRow={(row)=> typeof row[0] == "number" ? "displayGreen" : ""}
  />
</table>
```

With the following CSS classes:

```css
.displayRed {
  color: red;
}

.displayGreen {
  color: green;
}
```

Produces this output:
<img src="https://i.imgur.com/gXmmRH0.png" alt="Table1">

Note that the `.table` class is from bootstrap. This example uses bootstrap styling but it is not required, nor is it a dependency of this project. Bootstrap is available here: https://getbootstrap.com/

## Badges
<img src="https://i.imgur.com/hqXI6Yb.png" alt="Badge1" width="200" height="200">


This can be done with:

    import {Badge} from "dashboard-widgets"
    <Badge number={2} subtitle="Score" stroke="red" />

Similarly, you can have a filled badge like the following:

<img src="https://i.imgur.com/SXSSkyp.png" alt="Badge2" width="200" height="220">


    import {Badge} from "dashboard-widgets"
    <Badge number={102} subtitle="Score" stroke="#a0f0a0" type="fill" />

## Phone Element

You can add elements within a phone screen like this:

<img src="https://i.imgur.com/cWaZ2X4.png" alt="Phone1">

The code here is simple:

    import {Phone} from 'dashboard-widgets'
    <Phone>
	    //Your content here
	</Phone>

You can create a smaller and more minimalist phone by passing a truthy value to the `small` prop:

<img src="https://i.imgur.com/5tNaTeh.png" alt="Phone2">

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

# Links
- NPM Page: https://www.npmjs.com/package/dashboard-widgets
- Github Repo: https://github.com/Benny121221/dashboard-widgets


# Contribution
If you're feeling generous, feel free to put in a PR. This is all under the MIT License.

---
![Logo](https://raw.githubusercontent.com/Benny121221/images/master/logo_full.png)

# Made by Where 1
