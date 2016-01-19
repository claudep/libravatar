/**
 * Support file for Libravatar
 * @source: https://code.launchpad.net/libravatar
 *
 * @licstart
 * Copyright (C) 2011, 2012, 2013, 2016 Francois Marier <francois@libravatar.org>
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Affero
 * General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version. The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Affero General Public License
 * for more details.
 *
 * As an additional permission under GNU AGPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU AGPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 * @licend
 */

"use strict";

// Autofocus the right field on forms
if (document.forms.login) {
    if (document.forms.login.username) {
        document.forms.login.username.focus();
    } else if (document.forms.login.openid_identifier) {
        document.forms.login.openid_identifier.focus();
    }
} else if (document.forms.addemail) {
    document.forms.addemail.email.focus();
} else if (document.forms.addopenid) {
    document.forms.addopenid.openid.focus();
} else if (document.forms.changepassword) {
    document.forms.changepassword.old_password.focus();
} else if (document.forms.deleteaccount) {
    if (document.forms.deleteaccount.password) {
        document.forms.deleteaccount.password.focus();
    }
} else if (document.forms.lookup) {
    if (document.forms.lookup.email) {
        document.forms.lookup.email.focus();
    } else if (document.forms.lookup.domain) {
        document.forms.lookup.domain.focus();
    }
} else if (document.forms.newaccount) {
    document.forms.newaccount.username.focus();
} else if (document.forms.reset) {
    document.forms.reset.email.focus();
}
