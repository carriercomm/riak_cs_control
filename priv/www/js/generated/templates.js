Ember.TEMPLATES['application'] = Ember.Handlebars.compile('<header class="constrained main-header logged-in">    <section class="less-than-half">        <div class="logo left">Simple, Available, Distributed Cloud Storage.</div>        <div class="clear"></div>    </section>    <section class="more-than-half nav-blocks">        <nav>            <div class="block-container orange has-shadow right">                <a {{action viewUsers this href=true}} class="nav-block orange-radial" rel="nofollow">                    <span class="nav-icon list-large"></span>                    <span class="bottom-text">List</span>                </a>            </div>            <div class="block-container green has-shadow right">                <a {{action createUser this href=true}} class="nav-block green-radial" rel="nofollow">                    <span class="nav-icon create-large"></span>                    <span class="bottom-text">Create</span>                </a>            </div>        </nav>    </section>    <div class="clear"></div>    <div class="block-container blue has-shadow">        <div class="blue-linear header-bar">            <div class="header-bar-icon account-large left"></div>            <h1 class="title">Administration</h1>        </div>    </div></header><div id="container">{{outlet}}</div><footer class="constrained">    <div class="block-container blue has-shadow">        <div class="footer-bar blue-linear">            <section class="half-width">                <div class="left footer-info">                    Copyright &copy; 2012 Basho Technologies, Inc.                </div>            </section>            <section class="half-width">                <div class="right footer-info">                    <a class="riak-logo" href="http://www.basho.com">Poweredy by</a>                </div>            </section>            <div class="clear"></div>        </div>    </div></footer>');
Ember.TEMPLATES['button'] = Ember.Handlebars.compile('<a class="row-button-usertable">{{view.label}}</a>');
Ember.TEMPLATES['create_user'] = Ember.Handlebars.compile('    <section class="constrained info">        <div class="block-container white">            <h1 class="title">Create User</h1>            <div class="white-slab nudge-down">                <h2 class="title">User Details</h2>                <div class="light-gray-bg inner-padding">                    <form>                        <label for="name">Name</label>                        <div class="field-wrapper">                          {{view Ember.TextField valueBinding="content.name" id="name" placeholder="Name" classNames="field"}}                        </div>                        <label for="email">E-mail Address</label>                        <div class="field-wrapper">                          {{view Ember.TextField valueBinding="content.email" id="email" placeholder="E-mail Address" classNames="field"}}                        </div>                        <div class="block-container green has-light-shadow left">                            <a href="#" class="small-button green-linear" {{action "submit" this target="view"}}>                                <span class="tiny-icon plus-tiny"></span>Create</a>                        </div>                        <div class="clear"></div>                    </form>                </div>            </div>        </div>    </section>');
Ember.TEMPLATES['users_item'] = Ember.Handlebars.compile('{{#with view}}    <td>      {{#if content.isDisabled}}        <div class="table-ribbon-red">DISABLED</div>      {{else}}        <div class="table-ribbon-blue">ENABLED</div>      {{/if}}    </td>        <td>      <h3>{{name}}</h3>      <span class="black-title">EMAIL ADDRESS:</span>{{email}}    </td>    <td>      <span class="black-title">ACCESS KEY:</span><span class="display-item gray">{{keyId}}</span><br/>      <span class="black-title">SECRET KEY:</span><span class="display-item gray">{{keySecret}}</span>    </td>    <td class="button-container white-border-left">      {{#if content.isDisabled}}        {{view RiakCsControl.ButtonView                label="Enable"                contentBinding="content"                target="enableUser"                class="white-border-bottom enable-disable"}}      {{else}}        {{view RiakCsControl.ButtonView                label="Disable"                contentBinding="content"                target="disableUser"                class="white-border-bottom enable-disable"}}      {{/if}}      {{view RiakCsControl.ButtonView              label="Revoke"              contentBinding="content"              target="revokeCredentials"              class="revoke"}}    </td>{{/with}}');
Ember.TEMPLATES['users'] = Ember.Handlebars.compile('<section class="constrained info">    <div class="block-container white">        <h2 class="title">User List</h2>        <div class="white-slab">            <div class="tab-container right">                <a {{action "viewUsers" this href=true}} class="active-tab">All</a>                <div class="hide-shadow clear"></div>            </div>            <div class="user-list-table">                <table class="info-table"><<<<<<< HEAD                    <!--                    <thead>                        <tr>                            <th><h2 class="title">Name</h2></th>                            <th><h2 class="title">E-mail</h2></th>                            <th><h2 class="title">Access Key</h2></th>                            <th><h2 class="title">Secret Key</h2></th>                            <th><h2 class="title">&nbsp;</h2></th>                            <th><h2 class="title">&nbsp;</h2></th>                        </tr>                    </thead>                    {{collection RiakCsControl.UsersCollectionView contentBinding="controller" itemClass="standard-row"}}                </table>            </div>        </div>    </div></section>');
