(function() {var implementors = {};
implementors["diem_management"] = [{"text":"impl TryInto&lt;SecureBackend&gt; for SecureBackend","synthetic":false,"types":[]}];
implementors["diem_secure_storage"] = [{"text":"impl TryInto&lt;GitHubStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl TryInto&lt;VaultStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl TryInto&lt;InMemoryStorageInternal&lt;RealTimeService&gt;&gt; for Storage","synthetic":false,"types":[]},{"text":"impl TryInto&lt;NamespacedStorage&gt; for Storage","synthetic":false,"types":[]},{"text":"impl TryInto&lt;OnDiskStorageInternal&lt;RealTimeService&gt;&gt; for Storage","synthetic":false,"types":[]}];
implementors["network"] = [{"text":"impl TryInto&lt;Vec&lt;ProtocolId&gt;&gt; for SupportedProtocols","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()