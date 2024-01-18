<div class="filler"></div>
        <svg width="200" height="200">
            <g>
                <circle id="shadow" style="fill:rgba(0,0,0,0.1)" cx="97" cy="100" r="87" filter="url(#innerShadow)"></circle>
                <circle id="circle" style="stroke: #FFF; stroke-width: 12px; fill:#12826f" cx="100" cy="100" r="80"></circle>
            </g>
            <g>
                <line x1="100" y1="100" x2="100" y2="55" transform="rotate(80 100 100)" style="stroke-width: 3px; stroke: #fffbf9;" id="hourhand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="43200s"
                                      repeatCount="indefinite"/>
                </line>
                <line x1="100" y1="100" x2="100" y2="40" style="stroke-width: 4px; stroke: #fdfdfd;" id="minutehand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="3600s"
                                      repeatCount="indefinite"/>
                </line>
                <line x1="100" y1="100" x2="100" y2="30" style="stroke-width: 2px; stroke: #C1EFED;" id="secondhand">
                    <animatetransform attributeName="transform"
                                      attributeType="XML"
                                      type="rotate"
                                      dur="60s"
                                      repeatCount="indefinite"/>
                </line>
            </g>
            <circle id="center" style="fill:#128A86; stroke: #C1EFED; stroke-width: 2px;" cx="100" cy="100" r="3"></circle>
        </svg>