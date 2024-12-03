---
external: false
title: "VIM Recommendations"
description: "asdasd"
date: 2024-12-02
heroImage: "../../my-os-home.png"
---

## General Tips

- Use gnu stow to manage dotfiles

### GIT

- Use toggleTerm with lazygit for quick actions with git repos, branches, commit views.

##### DiffviewFileHistory

- To find code author : Don't git blame, as it often shows reformatted and only the latest changes author.
- When in need to find the who actually put in the change in a particular file, the following is useful:

```lua
:DiffviewFileHistory %<cr>`
```

---

## Language/Framework specific

### Angular

Angular has components, which usually have a .ts, .html, .css/scss and spec files.
Use the following function to alternate/rotate between the same components files.

```lua
function()
  local bufname = vim.fn.expand "%:t:r"
  local bufext = vim.fn.expand "%:e"
  local bufdir = vim.fn.expand "%:p:h"
  local altfile = bufdir .. "/" .. bufname .. (bufext == "ts" and ".html" or ".ts")
  if vim.fn.filereadable(altfile) == 1 then
    vim.cmd("edit " .. altfile)
  else
    print "No alternate file found"
  end
end,

```
